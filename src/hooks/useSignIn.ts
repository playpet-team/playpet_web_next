import { useState } from 'react';
import { useEffect } from 'react'
import { auth } from 'firebase/app'
import { isServer, clientFirebase as firebase } from '../utils';
require('firebase/auth')

export default function useSignIn() {
    const [user, setUser] = useState(false)
    useEffect(() => {
        if (isServer()) {
            return
        }
        firebase().auth().onAuthStateChanged((user => {
            if (user) {
                setUser(true)
            } else {
                googleSignin()
            }
        }))

        async function googleSignin() {
            const provider = new auth.GoogleAuthProvider()
            await firebase().auth().setPersistence(auth.Auth.Persistence.LOCAL)
            const user = await firebase().auth().signInWithPopup(provider)
            await firebase().auth().signInWithCredential(user.credential)
        }
    }, [])

    return user
}
