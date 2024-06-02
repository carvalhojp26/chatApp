import React, { useState } from 'react'

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <h2>Login into your account</h2>
            <div>
                <input
                    id="email"
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    id="password"
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            <div>
                <Link href="/register">
                    Don't have an account? Register
                </Link>
            </div>
        </form>
    );
}

export default Login;