import { firestore } from '../../../src/utils/firebaseInit';

export default function handler(req, res) {
    firestore
        .collection('stores')
        .get()
        .then(stores => {
            res.status(200).json(stores.docs.map((store: any) => {
                return {
                    ...store.data(),
                    id: store.id
                }
            }));
        });
};