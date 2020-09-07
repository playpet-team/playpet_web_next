import { firestore, auth, Sentry } from '..'
import { getCurrentTime } from '../../../src/utils/firebaseadmin'

export default async function personHandler({ body: {
    email,
    username,
    photo = '',
    method,
}}, res) {
    try {
        const isExistUser = await findActiveUser(email)

        if (isExistUser === null) {
            return res.status(404).json({ message: '서버 오류입니다. 잠시후 다시 시도해주세요' })
        }

        
        if (!isExistUser.empty) {
            const userData = isExistUser.docs[0].data()
            const token = await getCustomToken(userData.uid)
            return res.status(200).json({
                newUser: false,
                token,
            })
        }

        const result = await auth().createUser({
            email,
            displayName: username,
            photoURL: photo,
        })
        let { uid } = result

        await createUserCollection({
            uid,
            method,
        })
        
        if (!uid) {
            return res.status(404).json({ message: '유저를 생성할수 없습니다' })
        }
        
        const token = await getCustomToken(uid)
        return res.status(200).json({
            newUser: true,
            token,
        })
    } catch (e) {
        console.error('createUser-', e)
        return res.status(404).json({ message: '유저를 생성할수 없습니다' })
    }
}

interface createUserParams {
    uid: string
    method: string
}
const createUserCollection = async ({ uid, method }: createUserParams) => {
    try {
        const {
            email,
            displayName = '',
            phoneNumber = '',
            photoURL = '',
        } = await auth().getUser(uid)

        await firestore().collection('users').doc(uid).set({
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

const getCustomToken = async (uid: string) => {
    try {
        return await auth().createCustomToken(uid)
    } catch (e) {
        Sentry.captureException(e)
        return ''
    }
}

const findActiveUser = async (email: string) => {
    try {
        return await firestore().collection('users')
            .where('email', '==', email)
            .where('isLeave', '==', false)
            .get()
    } catch (e) {
        Sentry.captureException(e)
        return null

    }
}