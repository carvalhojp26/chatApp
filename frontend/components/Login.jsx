import React, { useState } from 'react'
import Link from 'next/link';

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className='flex items-center justify-center min-h-screen flex-col'>
            <h2 className='text-light-blue text-5xl mb-8'>Login into your account</h2>
            <div>
                <input
                    className='bg-grey-input text-white w-input-w h-12 rounded-t-lg p-4 border-b-2 border-b-light-grey'
                    id="email"
                    type="email"
                    placeholder='Email'
                    value={email}   
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    className='bg-grey-input text-white mb-8 w-input-w h-12 rounded-b-lg p-4'
                    id="password"
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit" className='bg-light-blue text-background-blue w-input-w h-12 rounded-lg text-xl transition ease-in-out delay-50 hover:bg-cyan-300 mb-2'>Login</button>
            </div>
            <div>
                <Link href="/register" className='text-white text-left w-input-w'>
                    Don't have an account? Register
                </Link> 
            </div>
        </form>
    );
}

export default Login;