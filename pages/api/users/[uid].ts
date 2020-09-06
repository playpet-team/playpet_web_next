import { firestore, Sentry } from './../'

export default async function personHandler({ query: { uid } }, res) {
    try {
        const user = await firestore()
            .collection('users')
            .doc(uid)
            .get()
        res.status(200).json(user.data())
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}