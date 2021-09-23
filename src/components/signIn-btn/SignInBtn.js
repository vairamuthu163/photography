import React,{useState,useContext} from 'react'
import { UserContext } from '../../context/user'
import { signInWithGoogle } from '../../services/auth'
import './style.css'

import Button from '@material-ui/core/Button';

function SignInBtn() {
    const [user, setUser] = useContext(UserContext).user;
    const signInBtnClick = async() => {
        let userBySignIn = await signInWithGoogle();
        if (userBySignIn) {
            setUser(userBySignIn)
        } 
    }
    return (
        <div>
            <Button 
                style={{ textTransform: 'capitalize', fontFamily: 'Poppins' }}
                variant="outlined" color="inherit" onClick={signInBtnClick}
            >Login with google</Button>
        </div>
    )
}
export default SignInBtn
