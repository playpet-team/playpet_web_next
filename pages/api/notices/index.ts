import { NextApiResponse, NextApiRequest } from 'next';
import * as admin from 'firebase-admin';
import * as Sentry from '@sentry/node';
import { Collections } from '../../../src/utils/collections';
import { apiSetup } from '..';

apiSetup();

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    try {
        const notices = await admin
            .firestore()
            .collection(Collections.Notices)
            .get();
        console.log('notices.empty--', notices.empty);
        if (!notices.empty) {
            res.status(200).json(notices.docs.map((board) => board.data()));
        } else {
            res.status(200).json([]);
        }
    } catch (e) {
        Sentry.captureException(e);
        console.log('e-------', e);
        res.status(404).json({
            message: '찾는 게시물이 없습니다',
        });
    }
}
