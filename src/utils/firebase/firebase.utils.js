import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDLqv2ndnIYePYT0175hP-fZSrfvitI0TU",
  authDomain: "crwn-clothing-db-7e4b4.firebaseapp.com",
  projectId: "crwn-clothing-db-7e4b4",
  storageBucket: "crwn-clothing-db-7e4b4.appspot.com",
  messagingSenderId: "337191989796",
  appId: "1:337191989796:web:621639acebb6e5f9abdeb1"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot)
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error){
            console.log('errror the user',error.message)
        }
    }
    return userDocRef
    
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)

}