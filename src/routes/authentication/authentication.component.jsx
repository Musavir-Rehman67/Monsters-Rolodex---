// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"

// import { 
//     auth,
//     signInWithGooglePopup, 
//     createUserDocumentFromAuth ,
//     signInWithGoogleRedirect
// } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './authentication.styles.scss'

    const Authentication = () => {

        // useEffect(async() => {
        //     const response = await getRedirectResult(auth)
        //     console.log(response);
        //     if(response) {
        //         const userDocRef = await createUserDocumentFromAuth(response.user)

        //     }

        // },[])
    // const logGoogleUser = async () => {

    //     const {user} = await signInWithGooglePopup()
    //     const userDocRef = await createUserDocumentFromAuth(user)
    //     console.log(userDocRef);
    // }
    // const logGoogleRedirectUser = async () => {

    //     const {user} = await signInWithGoogleRedirect()
    //     console.log({user});
    // }
    return (
        <div className='authentication-container'>
            {/* <h1>Sign in page</h1> */}
            <SignInForm />
            {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with google Redirect</button> */}
            <SignUpForm />
        </div>
    )

    }
export default Authentication