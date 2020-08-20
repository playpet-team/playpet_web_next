import { firestore } from '../../../src/utils/firebaseInit';

export default function handler(req, res) {
    firestore
        .collection('users')
        .get()
        .then(users => {
            res.status(200).json(users.docs.map((user: any) => user.data()));
        });
};