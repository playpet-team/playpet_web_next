import { firestore, Sentry } from './../'

export default async function personHandler({ query: { id } }, res) {
    try {
        const product = await firestore()
            .collection('products')
            .doc(id)
            .get()

        if (product.exists) {
            res.status(200).json({
                ...product.data(),
                id: product.id,
            })
        } else {
            res.status(404).json({
                message: '찾는 카드가 없습니다',
            })
        }
    } catch (e) {
        Sentry.captureException(e)
        res.status(404).json({
            message: '찾는 카드가 없습니다',
        })
    }
}