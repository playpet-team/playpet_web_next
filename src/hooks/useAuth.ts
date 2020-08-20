// import React, { useEffect } from "react"
// import { auth } from "firebase/app";
// import 'firebase/auth';
// import { useHistory } from 'react-router';

// export default function useAuth() {
//     const history = useHistory();

//     useEffect(() => {
//         async function isNotLogged() {
//             try {
//                 const gTokenItem = localStorage.getItem('gToken');
//                 if (gTokenItem !== null) {
//                     const gToken = JSON.parse(gTokenItem);
//                     const refreshToken = auth.GoogleAuthProvider.credential(gToken.oauthIdToken);
//                     await auth().signInWithCredential(refreshToken);
//                 }
//             } catch (e) {
//                 history.push('/');
//             }
//         }
//         if (!auth().currentUser) {
//             isNotLogged();
//         }
//     }, []);

// };
