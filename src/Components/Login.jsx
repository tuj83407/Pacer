// src/Login.jsx
import React, { useState } from 'react';
import { auth } from '../firebase'; // Adjust the path as needed
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to track account creation

  const checkEmailExists = async (email) => {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    return methods.length > 0;
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    const exists = await checkEmailExists(email);

    if (exists) {
      setError('An account with this email already exists. Please sign in.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError('');
      setIsCreatingAccount(false); // Reset account creation state
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Welcome to Pacer</h2>
      {error && <p className="error">{error}</p>}

      {isCreatingAccount ? (
        <form onSubmit={handleEmailSignUp}>
          <h3>Create Account</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <p onClick={() => setIsCreatingAccount(false)} style={{ cursor: 'pointer', color: '#ffa100' }}>Already have an account? Sign In</p>
        </form>
      ) : (
        <form onSubmit={handleEmailSignIn}>
          <h3>Sign In</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          <p onClick={() => setIsCreatingAccount(true)} style={{ cursor: 'pointer', color: '#ffa100' }}>Don't have an account? Create Account</p>
        </form>
      )}

      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
