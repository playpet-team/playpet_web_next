// import React from 'react'
// import styled from '@emotion/styled'
// import firebase from "firebase/app";
// import 'firebase/auth';
// const provider = new firebase.auth.GoogleAuthProvider();
// import { Link } from "react-router-dom";

// export default function BaoLogin() {
//     const [user, setUser] = React.useState<firebase.User | null>(firebase.auth().currentUser ? firebase.auth().currentUser : null);

//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             setUser(user);
//         } else {
//             setUser(null);
//         }
//     });

//     const login = async () => {
//         const { credential }: any = await firebase.auth().signInWithPopup(provider);
//         if (credential) {
//             localStorage.setItem('gToken', JSON.stringify(credential));
//         }
//     };
//     const logout = async () => await firebase.auth().signOut();

//     return (
//         <BaoLoginBlock>
//             {user ?
//                 <button onClick={logout}>logout</button>
//                 :
//                 <button onClick={login}>login</button>
//             }
//             {!user && 'Loading...'}
//             <br />
//             {user && <Link to="/bao">바오로 가기</Link>}
//         </BaoLoginBlock>
//     );
// };

// const BaoLoginBlock = styled.div`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
// `
