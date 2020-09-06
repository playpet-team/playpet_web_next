import { auth, firestore, Sentry } from './../'

export default async function personHandler({ body: {
    uid,
}}, res) {
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
        await auth().deleteUser(uid)
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
    const now = firestore.Timestamp.now()
    try {
        return await firestore().collection('users').doc(uid).set({
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

// export const withdraw = functions.https.onCall(async (_data, { auth }) => {
//     try {
//         if (!auth || !auth.uid) {
//             return { status: 'FAIL' }
//         }
//         const uid = auth.uid
//         await updateLeftAt(uid)
//         await admin.auth().deleteUser(uid)
//         return { status: 'SUCCESS' }
//     } catch (e) {
//         console.error(`withdraw: ${e}`)
//         return { status: 'FAIL' }
//     }
// })