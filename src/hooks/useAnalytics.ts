import { isServer, clientFirebase as firebase } from './../utils/index';
import { useEffect } from 'react';

export default function useAnalytics() {
    useEffect(() => {
        if (!isServer()) {
            firebase().analytics()
        }
    }, [])
}
