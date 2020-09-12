import * as Sentry from '@sentry/node';
import * as admin from 'firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';
import { apiSetup } from '..';
import { CardModel } from '../../../src/components/Landing/ExplorePlayground';
import { Collections } from './../../../src/utils/collections';
apiSetup()

export default async function handler(req: NextApiRequest, res: NextApiResponse<CardModel[]>) {
    if (req.method === 'POST') {
        return
    }
    try {
        console.log('0000000000000000')
        const cards = await admin.firestore()
            .collection(Collections.Playground)
            .where('status', '==', 'active')
            .limit(10)
            .orderBy('createdAt')
            .get()
        // console.log("cards-2222222222-", cards.docs)

        res.status(200).json(cards.docs.map(card => card.data() as CardModel))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}
