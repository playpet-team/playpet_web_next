import { NextApiResponse } from 'next';
import { Collections } from './../../../src/utils/collections';
import { getCurrentTime } from '../../../src/utils/firebaseadmin'
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ body: {
    myUid, followingUid, methods,
}}: { body: { myUid: string; followingUid: string; methods: string; } }, res: NextApiResponse) {
    try {
        if (!myUid || !followingUid || !methods) {
            return res.status(404).json({
                status: 'FAIL',
                message: '카드 정보를 찾을수 없습니다. 잠시 후 다시 시도해주세요'
            })
        }
        const docExists = (await admin.firestore().collection(Collections.UserActions).doc(myUid).get()).exists
        if (docExists) {
            await admin.firestore().collection(Collections.UserActions).doc(myUid).update({
                followings: methods === 'add' ?
                    admin.firestore.FieldValue.arrayUnion(followingUid)
                    :
                    admin.firestore.FieldValue.arrayRemove(followingUid),
                updatedAt: getCurrentTime(),
            })
        } else {
            await admin.firestore().collection(Collections.UserActions).doc(myUid).set({
                followings: [followingUid],
                updatedAt: getCurrentTime(),
                createdAt: getCurrentTime(),
            })
        }
        res.status(200).json({
            status: 'SUCCESS',
        })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404).json({
            status: 'FAIL',
            message: '카드 정보를 찾을수 없습니다. 잠시 후 다시 시도해주세요'
        })
    }
}
