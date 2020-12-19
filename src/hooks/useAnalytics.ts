import { useEffect } from 'react';
import { isServer, clientFirebase as firebase } from './../utils/index';

export default function useAnalytics() {
    useEffect(() => {
        if (!isServer()) {
            firebase().analytics();
        }
    }, []);
}
