import { NextApiResponse, NextApiRequest } from 'next';
import * as admin from 'firebase-admin';
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
import { Collections } from './../../../src/utils/collections';

apiSetup();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        res.status(404);
    }
    try {
        const response = await admin
            .firestore()
            .collection(Collections.Products)
            .add(req.body);

        if (response) {
            res.status(200);
        }
    } catch (e) {
        Sentry.captureException(e);
        res.status(404);
    }
}
