import { firestore, Sentry } from './../'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return
    }
    try {
        const products = await firestore()
            .collection('products')
            .get()

        res.status(200).json(products.docs.map((user: any) => {
            return {
                ...user.data(),
                id: user.id,
            }
        }))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}