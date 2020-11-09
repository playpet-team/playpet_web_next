import { getCurrentTime } from './../../../src/utils/firebaseadmin';
import { Collections } from './../../../src/utils/collections';
import * as Sentry from '@sentry/node'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiSetup } from '..'
import * as admin from 'firebase-admin'
apiSetup()

export default async function personHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(404)
    }
    try {
        // tet.forEach(async (te) => {
        //     await admin.firestore().collection(Collections.Products).add({
        //         ...te,
        //         status: 'active',
        //         createdAt: getCurrentTime(),
        //         updatedAt: getCurrentTime(),
        //     })
        // })
        res.status(200).json({ status: 'success', })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}
