import * as Sentry from '@sentry/node';
import * as admin from 'firebase-admin';
import { NextApiResponse } from 'next';
import { apiSetup } from '..';
import { Collections } from './../../../src/utils/collections';

apiSetup();

export default async function personHandler(
    { query: { petType }, method }: { query: { petType: string }; method: any },
    res: NextApiResponse,
) {
    if (method === 'POST') {
        return;
    }
    try {
        console.log('0000000000000000');
        const information = await admin
            .firestore()
            .collection(Collections.PetInformation)
            .where('type', '==', petType)
            .orderBy('name', 'asc')
            .get();

        if (information.size) {
            const pets = information.docs.map((pet) => pet.data());
            res.status(200).json(pets);
        }
        res.status(200);
    } catch (e) {
        Sentry.captureException(e);
        res.status(404);
    }
}
