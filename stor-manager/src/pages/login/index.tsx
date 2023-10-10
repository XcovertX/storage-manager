"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the signIn function from NextAuth.js
    const result = await signIn('credentials', {
      redirect: false, // Set to true to enable redirect after login
      email,
      password,
    });

 if(result != undefined) { 
    // Check if login was successful
    if (result.error) {
      console.error('Login failed:', result.error);
    } else {
      // Redirect the user to the dashboard or another page upon successful login
      window.location.href = '/dashboard';
    }}
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;