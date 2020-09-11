import { NextApiResponse } from 'next';
import { getCurrentTime } from './../../../src/utils/firebaseadmin';
import { Collections } from './../../../src/utils/collections';
import { createCustomToken } from './create-user';
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ body: {
    uid,
}}: { body: { uid: string; }},
    res: NextApiResponse
) {
    try {
        if (!uid) {
            return res.status(404).json({
                status: 'FAIL',
                message: '로그인에 실패했습니다'
            })
        }
        
        const customToken = await createCustomToken(uid)
        
        await admin.firestore().collection(Collections.AuthTokens).doc(uid).set({
            customToken,
            updatedAt: getCurrentTime()
        })
       
        return res.status(200).json({
            status: 'SUCCESS',
            customToken,
        })
    } catch (e) {
        Sentry.captureException(e)
        return res.status(404).json({
            status: 'FAIL',
            message: '로그인에 실패했습니다'
        })
    }
}
