import { firebaseTimeStampToStringStamp } from './../../../src/utils/index';
import { firestore } from './../'

export default function personHandler({ query: { id } }, res) {
    firestore()
        .collection('playground')
        .doc(id)
        .get()
        .then(card => {
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
        })
}