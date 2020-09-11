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
        const stores = await admin.firestore()
            .collection(Collections.Stores)
            .get()
        res.status(200).json(stores.docs.map((store: any) => {
            return {
                ...store.data(),
                id: store.id
            }
        }))
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}