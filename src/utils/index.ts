/* eslint-disable no-underscore-dangle */
import * as firebase from 'firebase/app';
import moment from 'moment';

require('firebase/analytics');

export const firebaseTimeStampToStringStamp = (at: any) =>
    moment((at.seconds || at._seconds) * 1000);
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const isProduction = process.env.NODE_ENV === 'production';
export const isServer = () => typeof window === 'undefined';
export const ROOT_URL = isProduction
    ? 'https://playpet.me'
    : 'http://localhost:3000';
export const removeSpace = (val: string = '') => val.replace(/(\s*)/g, '');

function firebaseInit() {
    const productionConfig = {
        apiKey: 'AIzaSyApkc_JUsxriexexbZhcONv5ISDXAeI3IQ',
        authDomain: 'playpet-production.firebaseapp.com',
        databaseURL: 'https://playpet-production.firebaseio.com',
        projectId: 'playpet-production',
        storageBucket: 'playpet-production.appspot.com',
        messagingSenderId: '952410130595',
        appId: '1:952410130595:web:4c709b536de4cff36c5716',
        measurementId: 'G-24830T021H',
    };
    const devConfig = {
        apiKey: 'AIzaSyCczK8wxmdEFMyWL9Nwm4jXOrk31_kg_fw',
        authDomain: 'playpet-5b432.firebaseapp.com',
        databaseURL: 'https://playpet-5b432.firebaseio.com',
        projectId: 'playpet-5b432',
        storageBucket: 'playpet-5b432.appspot.com',
        messagingSenderId: '386527552204',
        appId: '1:386527552204:web:84b4421b5fd7db5582d869',
        measurementId: 'G-3MRGE501JY',
    };
    return firebase.initializeApp(
        isProduction ? productionConfig : devConfig,
        'playpet-client',
    );
}

export const clientFirebase = () => {
    if (!isServer()) {
        return firebase.apps[0] || firebaseInit();
    }
    return null;
};
