import { Collections } from './../../../src/utils/collections';
import { createCustomToken } from './create-user';
import { firestore, Sentry } from './../'

export default async function personHandler({ body: {
    uid,
}}: {
    body: {
        uid: string
    }
}, res) {
    try {
        if (!uid) {
            return res.status(404).json({
                status: 'FAIL',
                message: '로그인에 실패했습니다'
            })
        }
        
        const customToken = await createCustomToken(uid)
        
        await firestore().collection(Collections.AuthTokens).doc(uid).set({
            customToken,
            updatedAt: firestore.Timestamp.now()
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
