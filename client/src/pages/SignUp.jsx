import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Avijit's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Your Username' />
              <TextInput placeholder='Username' type='text' id='username' />
            </div>
            <div>
              <Label value='Your Email' />
              <TextInput placeholder='Email' type='email' id='email' />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput placeholder='Password' type='password' id='password' />
            </div>
            <Button gradientDuoTone="purpleToPink" type='submit' className=''>Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
