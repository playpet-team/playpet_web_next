import * as admin from 'firebase-admin'
import { isProduction } from '../../src/utils';
import * as SentryNode from '@sentry/node';

export const firestore = admin.firestore
export const auth = admin.auth
export const Sentry = SentryNode

adminFirebaseInit()
sentryInit()

function adminFirebaseInit() {
    try {
        // 이미 initial 되있다면 하지않는다
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.projectId,
                privateKey: process.env.privateKey.replace(/\\n/g, '\n'),
                clientEmail: process.env.clientEmail,
            }),
            databaseURL: process.env.databaseURL,
        })
    } catch (error) {
        if (!/already exists/.test(error.message)) {
            console.log('error-------error', error);
            console.error("Firebase admin initialization error", error);
            SentryNode.captureException(error)
        }
    }
}

function sentryInit() {
    SentryNode.init({
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1.0,
        environment: !isProduction ? 'development' : 'production',
        debug: !isProduction,
    });
}