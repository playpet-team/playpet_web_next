import { NextApiResponse, NextApiRequest } from 'next';
import { Collections } from './../../../src/utils/collections';
import { getCurrentTime } from '../../../src/utils/firebaseadmin'
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ body: {
    email,
    username,
    photo = '',
    method,
}}: {
    body: {
        email: string;
        username: string;
        photo: string;
        method: string;
    }
}, res: NextApiResponse
) {
    try {
        console.log('email--', email)
        const isExistUser = await findActiveUser(email)
        
        if (isExistUser === null) {
            Sentry.captureException('서버 오류입니다. 잠시후 다시 시도해주세요')
            return res.status(404).json({ message: '서버 오류입니다. 잠시후 다시 시도해주세요' })
        }
        
        if (!isExistUser.empty) {
            console.log("exest")
            const userData = isExistUser.docs[0].data()
            console.log("exest2", userData)
            const customTokenForExistUser = await createCustomToken(userData.uid)
            console.log("exest3", customTokenForExistUser)
            return res.status(200).json({
                uid: userData.uid,
                newUser: false,
                customTokenForExistUser,
            })
        }
        console.log("new")

        const result = await admin.auth().createUser({
            email,
            displayName: username,
            photoURL: photo,
        })
        const { uid } = result
        
        await createUserCollection({
            uid,
            method,
        })
        
        if (!uid) {
            Sentry.captureException('유저를 생성할수 없습니다')
            return res.status(404).json({ message: '유저를 생성할수 없습니다' })
        }
        
        const customToken = await createCustomToken(uid)
        return res.status(200).json({
            uid,
            newUser: true,
            customToken,
        })
    } catch (e) {
        Sentry.captureException(e)
        return res.status(404).json({ message: '유저를 생성할수 없습니다' })
    }
}

interface CreateUserParams {
    uid: string
    method: string
}
const createUserCollection = async ({ uid, method }: CreateUserParams) => {
    try {
        const {
            email,
            displayName = '',
            phoneNumber = '',
            photoURL = '',
        } = await admin.auth().getUser(uid)

        await admin.firestore().collection(Collections.Users).doc(uid).set({
            uid,
            method,
            isLeave: false,
            username: displayName,
            email,
            phoneNumber,
            profilePhoto: photoURL,
            leaveAt: '',
            gender: '',
            birthDate: '',
            lastLogin: getCurrentTime(),
            createdAt: getCurrentTime(),
            updatedAt: getCurrentTime(),
        })
        return { result: 'signUp', status: 'SUCCESS' }
    } catch (e) {
        Sentry.captureException(e)
        return { result: 'error', status: 'SUCCESS' }
    }
}

export const createCustomToken = async (uid: string) => {
    try {
        return await admin.auth().createCustomToken(uid)
    } catch (e) {
        Sentry.captureException(e)
        return ''
    }
}

const findActiveUser = async (email: string) => {
    try {
        return await admin.firestore().collection(Collections.Users)
            .where('email', '==', email)
            .where('isLeave', '==', false)
            .get()
    } catch (e) {
        Sentry.captureException(e)
        return null

    }
}