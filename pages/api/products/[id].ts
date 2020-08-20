import { firestore } from './../'

export default function personHandler({ query: { id } }, res) {
    firestore
        .collection('products')
        .doc(id)
        .get()
        .then(product => {
            res.status(200).json({
                ...product.data(),
                id: product.id,
            })
        })
}