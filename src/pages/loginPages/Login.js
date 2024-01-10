import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(username,password)
      const response = await fetch('/login/password', {  // Updated to match your Express route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const data = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const textContent = doc.body.textContent;
      console.log(textContent);
      if (textContent.includes("You need to enable JavaScript to run this app.")){
        alert("signed in successfully");
      } else {
        alert("sign in failed");
      }

      // Handle successful login, e.g., redirect or update the UI
    } catch (error) {
      console.error('Error:', error.message);
      // Handle failed login, e.g., display an error message to the user
    }
  };

  return (
    <>
      <section className="prompt">
        <h1>nice Company</h1>
        <h2>Sign in</h2>
        <p>eg user, pwd: alice, letmein</p>
        <section>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button type="button" onClick={handleLogin}>
          Sign in
        </button>
      </section>

      <p className="help">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </>
  );
};

export default Login;
