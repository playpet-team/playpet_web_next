import { NextApiResponse, NextApiRequest } from 'next';
import { Collections } from './../../../src/utils/collections';
import { firebaseTimeStampToStringStamp } from './../../../src/utils/index';
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ query: { id } }:
    { query: { id: string } },
res: NextApiResponse) {
    try {
        const card = await admin.firestore()
            .collection(Collections.Playground)
            .doc(id)
            .get()
        if (card.exists) {
            const data = card.data()
            res.status(200).json({
                ...data,
                createdAt: firebaseTimeStampToStringStamp(data.createdAt),
                updatedAt: firebaseTimeStampToStringStamp(data.updatedAt),
                id: card.id,
            })
        } else {
            res.status(404).json({
                message: '찾는 카드가 없습니다',
            })
        }
    } catch (e) {
        Sentry.captureException(e)
        res.status(404).json({
            message: '찾는 카드가 없습니다',
        })
    }
}