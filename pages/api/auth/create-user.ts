import { firestore, auth } from '..'
import { getCurrentTime } from '../../../src/utils/firebaseadmin'

export default async function personHandler({ body: {
    email,
    username,
    photo = '',
    method,
}}, res) {
    try {
        console.log('gogo--------', email, username, photo, method)
        let uid = ''
        const isExistUser = await firestore().collection('users')
            .where('email', '==', email)
            .where('isLeave', '==', false)
            .get()
        console.log('isExistUser-----------', !isExistUser.empty)

        if (!isExistUser.empty) {
            console.log('111')
            const userData = isExistUser.docs[0].data()
            const token = await getCustomToken(userData.uid)
            console.log('token---', token)
            return res.status(200).json({
                newUser: false,
                token,
            })
        }
        console.log('2222')
        const result = await auth().createUser({
            email,
            displayName: username,
            photoURL: photo,
        })
        uid = result.uid
        await createUserCollection({
            uid,
            method,
        })

        if (!uid) {
            return res.status(404).json({ message: '유저를 생성할수 없습니다' })
        }
    
        return res.status(200).json({
            newUser: true,
            token: getCustomToken(uid),
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
    } catch (error) {
        console.error('createUserCollection--error--', error)
        return { result: 'error', status: 'SUCCESS' }
    }
}

const getCustomToken = async (uid: string) => await auth().createCustomToken(uid)
