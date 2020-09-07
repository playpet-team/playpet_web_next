import { firestore, Sentry } from '..'
import { getCurrentTime } from '../../../src/utils/firebaseadmin'

export default async function personHandler({ body: {
    myUid, followingUid, methods,
}}, res) {
    try {
        if (!myUid || !followingUid || !methods) {
            return res.status(404).json({
                status: 'FAIL',
                message: '카드 정보를 찾을수 없습니다. 잠시 후 다시 시도해주세요'
            })
        }
        const docExists = (await firestore().collection('userActions').doc(myUid).get()).exists
        if (docExists) {
            await firestore().collection('userActions').doc(myUid).update({
                followings: methods === 'add' ?
                    firestore.FieldValue.arrayUnion(followingUid)
                    :
                    firestore.FieldValue.arrayRemove(followingUid),
                updatedAt: getCurrentTime(),
            })
        } else {
            await firestore().collection('userActions').doc(myUid).set({
                followings: [followingUid],
                updatedAt: getCurrentTime(),
                createdAt: getCurrentTime(),
            })
        }
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
