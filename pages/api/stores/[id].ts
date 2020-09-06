import { firestore, Sentry } from './../'

export default async function personHandler({ query: { id } }, res) {
    try {
        const product = await firestore()
            .collection('stores')
            .doc(id)
            .get()

        res.status(200).json({
            ...product.data(),
            id: product.id,
        })

    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}