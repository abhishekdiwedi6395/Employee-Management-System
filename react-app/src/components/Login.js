import React, { useState } from 'react';
import '../css/login.css';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form inputs
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // Perform login logic here (e.g., send API request)
    console.log('Logging in...');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form className='form' onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" placeholder="Please Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input className='' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
