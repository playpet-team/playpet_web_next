import { firestore } from '../../../src/utils/firebaseInit';

export default function personHandler({ query: { uid } }, res) {
    firestore
        .collection('users')
        .doc(uid)
        .get()
        .then(user => {
            res.status(200).json(user.data());
        });
};