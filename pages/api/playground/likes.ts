import { firestore, Sentry } from '..'
import { getCurrentTime } from '../../../src/utils/firebaseadmin'

export default async function personHandler({ body: {
    uid, id, methods,
}}, res) {
    try {
        if (!uid || !id || !methods) {
            return res.status(404).json({
                status: 'FAIL',
                message: '카드 정보를 찾을수 없습니다. 잠시 후 다시 시도해주세요'
            })
        }
        const docExists = (await firestore().collection('userActions').doc(uid).get()).exists
        console.log('docExists------', docExists, methods)
        const promiseArr = []
        if (docExists) {
            console.log('1')
            promiseArr.push(
                firestore().collection('userActions').doc(uid).update({
                    cardLikes: methods === 'add' ?
                        firestore.FieldValue.arrayUnion(id)
                        :
                        firestore.FieldValue.arrayRemove(id),
                    updatedAt: getCurrentTime(),
                })
            )
        } else {
            console.log('2')
            promiseArr.push(
                firestore().collection('userActions').doc(uid).set({
                    cardLikes: [id],
                    updatedAt: getCurrentTime(),
                    createdAt: getCurrentTime(),
                })
            )
        }
        console.log('3')
        promiseArr.push(
            firestore().collection('playground').doc(id).update({
                likes: firestore.FieldValue.increment(1),
                updatedAt: getCurrentTime(),
            })
        )
        await Promise.all(promiseArr)
        console.log('4')
        res.status(200).json({
            status: 'SUCCESS',
        })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404).json({
            status: 'FAIL',
            message: '카드 정보를 찾을수 없습니다. 잠시 후 다시 시도해주세요'
        })
    }
}
