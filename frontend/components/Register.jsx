import React, {useState} from 'react'
import Link from 'next/link';

function Register () {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted', {userName, email, password})
        try{
            const response = await fetch('http://localhost:3001/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, email, password })
            })
            if (response.ok) {
                const result = await response.json()
                console.log('Registered successfully', result)
            } else {
                throw new Error('Failed registering')
            }
        } catch (error) {
            console.log('Error registering', error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex items-center justify-center min-h-screen flex-col appearance-none'>
            <h2 className='text-light-blue text-5xl mb-8'>Register your account</h2>
            <div>
                <input
                    className='bg-grey-input text-white w-input-w h-12 rounded-t-lg p-4 border-b-2 border-b-light-grey'
                    type="text" 
                    id="username"
                    placeholder="Username"
                    value = {userName} 
                    onChange={(e) => (setUsername(e.target.value))}
                    />
            </div>
            <div>
                <input
                    className='bg-grey-input text-white w-input-w h-12 p-4 border-b-2 border-b-light-grey'
                    type="email" 
                    id="email"
                    placeholder="Email"
                    value = {email} 
                    onChange={(e) => (setEmail(e.target.value))}
                    />
            </div>
            <div>
                <input
                    className='bg-grey-input text-white mb-8 w-input-w h-12 rounded-b-lg p-4'
                    type="password" 
                    id="password"
                    placeholder="Password"
                    value = {password} 
                    onChange={(e) => (setPassword(e.target.value))}
                    />
            </div>
            <div>
                <button type="submit" className='bg-light-blue text-background-blue w-input-w h-12 rounded-lg text-xl transition ease-in-out delay-50 hover:bg-cyan-300 mb-2'>Register</button>
            </div>
            <div>
                <Link href="/" className='text-white text-left w-input-w'>
                    Already have an account? Login
                </Link>
            </div>
        </form>
    )
}

export default Register;