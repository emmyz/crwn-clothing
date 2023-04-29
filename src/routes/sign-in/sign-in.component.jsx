import { Fragment } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const logGoogleUser = async ()=>{
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
}
const SignIn = () => {
    return (
        <Fragment>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>Sign In With Google</button>

        </Fragment>
        
    );
}

export default SignIn;