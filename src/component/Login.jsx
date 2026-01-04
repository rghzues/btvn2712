import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if(name === 'admin' && password === '123456'){
            localStorage.setItem('isLogged', 'true');
            navigate('/dashboard');
        }else{
            alert('Nhap lai de ban oi');
        }
    };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login