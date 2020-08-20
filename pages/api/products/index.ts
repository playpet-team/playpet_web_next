import { firestore } from './../'

export default function handler(req, res) {
    if (req.methd === 'POST') {
        return
    }
    firestore
        .collection('products')
        .get()
        .then(products => {
            res.status(200).json(products.docs.map((user: any) => {
                return {
                    ...user.data(),
                    id: user.id,
                }
            }))
        })
}