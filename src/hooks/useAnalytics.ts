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
        apiKey: "AIzaSyCczK8wxmdEFMyWL9Nwm4jXOrk31_kg_fw",
        authDomain: "playpet-5b432.firebaseapp.com",
        databaseURL: "https://playpet-5b432.firebaseio.com",
        projectId: "playpet-5b432",
        storageBucket: "playpet-5b432.appspot.com",
        messagingSenderId: "386527552204",
        appId: "1:386527552204:web:84b4421b5fd7db5582d869",
        measurementId: "G-3MRGE501JY"
      };
      firebase.initializeApp(firebaseConfig);
}
