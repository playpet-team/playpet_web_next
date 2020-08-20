import { firestore } from '../../../src/utils/firebaseInit';

export default function handler(req, res) {
    firestore
        .collection('products')
        .get()
        .then(products => {
            res.status(200).json(products.docs.map((user: any) => {
                return {
                    ...user.data(),
                    id: user.id,
                }
            }));
        });
};