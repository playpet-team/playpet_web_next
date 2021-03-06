import * as Sentry from '@sentry/node';
import { NextApiRequest, NextApiResponse } from 'next';
import { apiSetup } from '..';

apiSetup();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        res.status(404);
    }
    try {
        // const cards = await admin.firestore()
        //     .collection(Collections.BusinessModel)
        //     .get()
        // res.status(200).json(cards.docs.map((card: any) => {
        //     return ({
        //         ...card.data(),
        //         id: card.id,
        //     })
        // }))
    } catch (e) {
        Sentry.captureException(e);
        res.status(404);
    }
}
