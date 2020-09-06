import { firestore, Sentry } from './../'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return
    }
    try {
        const cards = await firestore()
            .collection('playground')
            .get()

        res.status(200).json(cards.docs.map((card: any) => card.data()))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}
