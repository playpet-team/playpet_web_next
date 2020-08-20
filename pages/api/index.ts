import * as admin from 'firebase-admin'
import { adminFirebaseInit } from '../../src/utils/firebaseInit'
adminFirebaseInit()
export const firestore = admin.firestore()