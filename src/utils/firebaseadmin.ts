import * as admin from 'firebase-admin'

export const getCurrentTime = () => admin.firestore.FieldValue.serverTimestamp()
