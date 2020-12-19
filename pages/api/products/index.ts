import { NextApiResponse, NextApiRequest } from 'next';
import * as admin from 'firebase-admin';
import * as Sentry from '@sentry/node';
import { Collections } from './../../../src/utils/collections';
import { apiSetup } from '..';

apiSetup();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        return;
    }
    try {
        const products = await admin
            .firestore()
            .collection(Collections.Products)
            .get();

        res.status(200).json(
            products.docs.map((user: any) => {
                return {
                    ...user.data(),
                    id: user.id,
                };
            }),
        );
    } catch (e) {
        Sentry.captureException(e);
        res.status(404);
    }
}
