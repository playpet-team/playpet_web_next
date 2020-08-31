import { firestore } from './../'

export default function personHandler({ query: { id } }, res) {
    console.log('id', id);
    firestore
        .collection('playground')
        .doc(id)
        .get()
        .then(card => {
            if (card.exists) {
                res.status(200).json({
                    ...card.data(),
                    id: card.id,
                })
            } else {
                res.status(404).json({
                    message: '찾는 카드가 없습니다',
                })
            }
        })
}