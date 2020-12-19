import * as admin from 'firebase-admin';
import * as Sentry from '@sentry/node';
import { isProduction } from '../../src/utils';

export const adminFirebaseInit = () => {
    try {
        // 이미 initial 되있다면 하지않는다
        console.log('process.env.projectId------', process.env.projectId);
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.projectId,
                privateKey: process.env.privateKey.replace(/\\n/g, '\n'),
                clientEmail: process.env.clientEmail,
            }),
            databaseURL: process.env.databaseURL,
        });
    } catch (error) {
        if (!/already exists/.test(error.message)) {
            console.error('Firebase admin initialization error', error);
            Sentry.captureException(error);
        }
    }
};

export const sentryInit = () => {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        debug: !isProduction,
    });
};

export const apiSetup = () => {
    adminFirebaseInit();
    sentryInit();
};
