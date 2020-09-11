import { auth } from 'firebase/app';
import { useEffect, useState } from 'react';
import { clientFirebase as firebase, isServer } from '../utils';
require('firebase/auth')

export default function useSignIn() {
    const [user, setUser] = useState(false)
    useEffect(() => {
        if (isServer()) {
            return
        }
        firebase().auth().onAuthStateChanged((changedUser => {
            if (changedUser && ADMIN_EMAIL.includes(changedUser.email)) {
                setUser(true)
            } else {
                googleSignin()
            }
        }))

        async function googleSignin() {
            const provider = new auth.GoogleAuthProvider()
            await firebase().auth().setPersistence(auth.Auth.Persistence.LOCAL)
            // const user = await firebase().auth().signInWithPopup(provider)
            await firebase().auth().signInWithRedirect(provider)
            // await firebase().auth().signInWithCredential(user.credential)
        }
    }, [])

    return user
}

const ADMIN_EMAIL = ['bk@playpet.me', 'paul@playpet.me', 'joshua@playpet.me', 'key@playpet.me']
