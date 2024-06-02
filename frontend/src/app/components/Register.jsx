import React, {useState} from 'react'

function Register () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <h2>Register your account</h2>
            <div>
                <input
                    type="text" 
                    id="username"
                    placeholder="Username"
                    value = {username} 
                    onChange={(e) => (setUsername(e.target.value))}
                    />
            </div>
            <div>
                <input
                    type="email" 
                    id="email"
                    placeholder="Email"
                    value = {email} 
                    onChange={(e) => (setEmail(e.target.value))}
                    />
            </div>
            <div>
                <input
                    type="password" 
                    id="password"
                    placeholder="password"
                    value = {password} 
                    onChange={(e) => (setPassword(e.target.value))}
                    />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
            <div>
                <Link href="/login">
                    Already have an account? Login
                </Link>
            </div>
        </form>
    )
}

export default Register;