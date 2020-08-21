import { firestore } from './../'

export default function handler(req, res) {
    if (req.methd === 'POST') {
        return
    }
    firestore
        .collection('users')
        .get()
        .then(users => {
            res.status(200).json(users.docs.map((user: any) => user.data()))
        })
}
