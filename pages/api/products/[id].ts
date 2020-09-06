import { firestore } from './../'

export default function personHandler({ query: { id } }, res) {
    firestore()
        .collection('products')
        .doc(id)
        .get()
        .then(product => {
            if (product.exists) {
                res.status(200).json({
                    ...product.data(),
                    id: product.id,
                })
            } else {
                res.status(404).json({
                    message: '찾는 카드가 없습니다',
                })
            }
        })
}