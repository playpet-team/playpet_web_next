import { Collections } from './../../../src/utils/collections';
import { firestore, Sentry } from './../'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return
    }
    try {
        const stores = await firestore()
            .collection(Collections.Stores)
            .get()
        res.status(200).json(stores.docs.map((store: any) => {
            return {
                ...store.data(),
                id: store.id
            }
        }))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}