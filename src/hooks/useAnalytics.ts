import { isServer } from './../utils/index';
import { useEffect } from 'react';
import * as firebase from 'firebase/app';
require('firebase/analytics')

export default function useAnalytics() {
    useEffect(() => {
        if (!isServer()) {
            firebaseInit()
            firebase.analytics()
            console.log('hahaha')
        }
    }, [])
}

export function firebaseInit() {
    const firebaseConfig = {
        apiKey: "AIzaSyApkc_JUsxriexexbZhcONv5ISDXAeI3IQ",
        authDomain: "playpet-production.firebaseapp.com",
        databaseURL: "https://playpet-production.firebaseio.com",
        projectId: "playpet-production",
        storageBucket: "playpet-production.appspot.com",
        messagingSenderId: "952410130595",
        appId: "1:952410130595:web:4c709b536de4cff36c5716",
        measurementId: "G-24830T021H"
      };
      firebase.initializeApp(firebaseConfig);
}
