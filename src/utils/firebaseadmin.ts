import { firestore } from './../../pages/api';

export const getCurrentTime = () => firestore.FieldValue.serverTimestamp()
