import { NextApiResponse } from 'next'
import { Collections } from './../../../src/utils/collections'
import * as admin from 'firebase-admin'
import * as Sentry from '@sentry/node'
import { apiSetup } from '..'
apiSetup()

export default async function personHandler({ body: {
    uid,
}}: { body: { uid: string }
}, res: NextApiResponse) {
    try {
        console.log('------------', uid)
        if (!uid) {
            return res.status(404).json({
                status: 'FAIL',
                message: '회원정보를 찾을수 없습니다. 잠시후 다시 시도해주세요'
            })
        }
        // const uid = uid.uid
        // console.log("여기까지", uid)
        // return res.status(200).json({
        //     status: 'SUCCESS'
        // })
        await updateLeftAt(uid)
        await admin.auth().deleteUser(uid)
        return res.status(200).json({
            status: 'SUCCESS'
        })
    } catch (e) {
        Sentry.captureException(e)
        return res.status(404).json({
            status: 'FAIL',
            message: '회원정보를 찾을수 없습니다. 잠시후 다시 시도해주세요'
        })
    }
}

const updateLeftAt = async (uid: string) => {
    const now = admin.firestore.Timestamp.now()
    try {
        return await admin.firestore().collection(Collections.Users).doc(uid).set({
            isLeave: true,
            leaveAt: now,
            updatedAt: now,
        },
            { merge: true }
        )
    } catch (e) {
        Sentry.captureException(e)
    }
}

// export const withdraw = functions.https.onCall(async (_data, { admin.auth }) => {
//     try {
//         if (!admin.auth || !admin.auth.uid) {
//             return { status: 'FAIL' }
//         }
//         const uid = admin.auth.uid
//         await updateLeftAt(uid)
//         await admin.admin.auth().deleteUser(uid)
//         return { status: 'SUCCESS' }
//     } catch (e) {
//         console.error(`withdraw: ${e}`)
//         return { status: 'FAIL' }
//     }
// })