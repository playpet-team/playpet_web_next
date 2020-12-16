import { NextApiResponse, NextApiRequest } from 'next';
import { Collections } from './../../../src/utils/collections';
import { getCurrentTime } from '../../../src/utils/firebaseadmin'
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ body: {
    title,
    description,
    link,
    type,
}, method }: {
    body: {
        title: string
        description: string
        link: string
        type: 'notice' | 'qna'
    }
    method: string
}, res: NextApiResponse
) {
    if (method === 'GET') {
        res.status(404)
    }
    try {
        await admin.firestore()
            .collection(Collections.Notices)
            .add({
                title,
                description,
                link,
                type,
                status: 'active',
                createdAt: getCurrentTime(),
                updatedAt: getCurrentTime()
            })
        res.status(200)
    } catch (e) {
        res.status(404)
    }
}