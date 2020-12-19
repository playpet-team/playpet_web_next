import { NextApiResponse } from 'next';
import * as admin from 'firebase-admin';
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
import { Collections } from './../../../src/utils/collections';

apiSetup();

export default async function personHandler(
    { query: { uid } }: { query: { uid: string } },
    res: NextApiResponse,
) {
    try {
        const user = await admin
            .firestore()
            .collection(Collections.Users)
            .doc(uid)
            .get();
        res.status(200).json(user.data());
    } catch (e) {
        Sentry.captureException(e);
        res.status(404);
    }
}
