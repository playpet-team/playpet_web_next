import { firestore } from './../'

export default function handler(req, res) {
    if (req.methd === 'POST') {
        return
    }
    firestore
        .collection('stores')
        .get()
        .then(stores => {
            res.status(200).json(stores.docs.map((store: any) => {
                return {
                    ...store.data(),
                    id: store.id
                }
            }))
        })
}