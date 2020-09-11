import { NextApiResponse } from 'next';
import { Collections } from './../../../src/utils/collections';
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ query: { id } }: { query: { id: string; }}, res: NextApiResponse) {
    try {
        const product = await admin.firestore()
            .collection(Collections.Products)
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