import { NextApiResponse } from 'next';
import { Collections } from './../../../src/utils/collections';
import { getCurrentTime } from '../../../src/utils/firebaseadmin'
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node';
import { apiSetup } from '..';
apiSetup()

export default async function personHandler({ body: {
    uid, id, methods,
}}: { body: { uid: string; id: string; methods: string; } }, res: NextApiResponse) {
    try {
        if (!uid || !id || !methods) {
            return res.status(404).json({
                status: 'FAIL',
                message: '카드 정보를 찾을수 없습니다. 잠시 후 다시 시도해주세요'
            })
        }
        const docExists = (await admin.firestore().collection(Collections.UserActions).doc(uid).get()).exists
        console.log('docExists------', docExists, methods)
        const promiseArr = []
        if (docExists) {
            console.log('1')
            promiseArr.push(
                admin.firestore().collection(Collections.UserActions).doc(uid).update({
                    cardLikes: methods === 'add' ?
                        admin.firestore.FieldValue.arrayUnion(id)
                        :
                        admin.firestore.FieldValue.arrayRemove(id),
                    updatedAt: getCurrentTime(),
                })
            )
        } else {
            console.log('2')
            promiseArr.push(
                admin.firestore().collection(Collections.UserActions).doc(uid).set({
                    cardLikes: [id],
                    updatedAt: getCurrentTime(),
                    createdAt: getCurrentTime(),
                })
            )
        }
        console.log('3')
        promiseArr.push(
            admin.firestore().collection(Collections.Playground).doc(id).update({
                likes: admin.firestore.FieldValue.increment(1),
                updatedAt: getCurrentTime(),
            })
        )
        await Promise.all(promiseArr)
        console.log('4')
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
