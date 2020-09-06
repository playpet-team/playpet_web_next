import { firestore } from './../'

export default function handler(req, res) {
    if (req.method === 'POST') {
        return
    }
    firestore()
        .collection('playground')
        .get()
        .then(cards => {
            res.status(200).json(cards.docs.map((card: any) => card.data()))
        })
}
