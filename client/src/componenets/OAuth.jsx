import { Button } from 'flowbite-react'
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result.user.photoURL);

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    avatar: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Button onClick={handleGoogleClick} type='button' gradientDuoTone='pinkToOrange' outline>
            <FaGoogle className='text-xl mr-2' />
            Continue with Google
        </Button>
    )
}
