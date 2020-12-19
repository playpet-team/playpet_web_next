import * as admin from 'firebase-admin';
import * as Sentry from '@sentry/node';
import { NextApiResponse, NextApiRequest } from 'next';
import { apiSetup } from '..';
import { Collections } from './../../../src/utils/collections';

apiSetup();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        return;
    }
    try {
        const users = await admin
            .firestore()
            .collection(Collections.Users)
            .get();

        res.status(200).json(users.docs.map((user: any) => user.data()));
    } catch (e) {
        Sentry.captureException(e);
        res.status(404);
    }
}
