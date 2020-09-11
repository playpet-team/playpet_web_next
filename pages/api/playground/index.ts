import { NextApiResponse, NextApiRequest } from 'next';
import { Collections } from './../../../src/utils/collections';
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return
    }
    try {
        const cards = await admin.firestore()
            .collection(Collections.Playground)
            .get()

        res.status(200).json(cards.docs.map((card: any) => card.data()))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}
