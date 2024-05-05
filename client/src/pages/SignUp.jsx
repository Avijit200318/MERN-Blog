import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../componenets/OAuth';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try{
      const res = await fetch("/api/auth/signUp", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    }catch(error){
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-3xl'>
            <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Avijit's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label value='Your Username' />
              <TextInput placeholder='Username' type='text' id='username' onChange={handleChange} required />
            </div>
            <div>
              <Label value='Your Email' />
              <TextInput placeholder='Email' type='email' id='email' onChange={handleChange} required />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput placeholder='Password' type='password' id='password' onChange={handleChange} required />
            </div>
            <Button gradientDuoTone="purpleToPink" type='submit' className='' disabled={loading}>{loading ? 
            <>
            <Spinner size='sm' />
            <span className="pl-3">Loading...</span>
            </>
            : 'Sign Up'}</Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
          {error && (
            <Alert className='mt-5' color='failure'>{error}</Alert>
          )}
        </div>
      </div>
    </div>
  )
}
