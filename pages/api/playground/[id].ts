import { firebaseTimeStampToStringStamp } from './../../../src/utils/index';
import { firestore, Sentry } from './../'

export default async function personHandler({ query: { id } }, res) {
    try {
        const card = await firestore()
            .collection('playground')
            .doc(id)
            .get()
        if (card.exists) {
            const data = card.data()
            res.status(200).json({
                ...data,
                createdAt: firebaseTimeStampToStringStamp(data.createdAt),
                updatedAt: firebaseTimeStampToStringStamp(data.updatedAt),
                id: card.id,
            })
        } else {
            res.status(404).json({
                message: '찾는 카드가 없습니다',
            })
        }
    } catch (e) {
        Sentry.captureException(e)
        res.status(404).json({
            message: '찾는 카드가 없습니다',
        })
    }
}