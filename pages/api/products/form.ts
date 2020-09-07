import { Collections } from './../../../src/utils/collections';
import { firestore, Sentry } from '..'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404)
        
    }
    try {
        const response = await firestore()
            .collection(Collections.Products)
            .add(req.body)

        if (response) {
            res.status(200)
        }
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
    
}