import { firestore } from './../'
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return
    }
    try {
        const users = await firestore()
            .collection('users')
            .get()
        res.status(200).json(users.docs.map((user: any) => user.data()))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}
