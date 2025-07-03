import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (
      email === process.env.REACT_APP_ADMIN_EMAIL &&
      password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      const randomToken = generateRandomToken();
      localStorage.setItem('token', randomToken);
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };
  
  // Utility function to generate a random token
  const generateRandomToken = () => {
    return (
      Date.now().toString(36) + Math.random().toString(36).substring(2, 15)
    );
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://res.cloudinary.com/dk2gu7qmv/image/upload/v1751481364/57f64aac51a7dpklogo500x500_cvaiyq.gif"
          alt="Logo"
          style={styles.logo}
        />
        <hr style={styles.divider} />
        <h2 style={styles.heading}>Admin Login</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

const font = `'Poppins', sans-serif`;

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: font,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
    fontFamily: font,
  },
  logo: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginBottom: 5,
  },
  divider: {
    width: '100%',
    border: 'none',
    borderTop: '1px solid #f58220',
    marginBottom: 5,
  },
  heading: {
    textAlign: 'center',
    color: '#f58220',
    margin: 0,
    fontFamily: font,
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: 5,
    border: '1px solid #ccc',
    fontSize: 14,
    fontFamily: font,
  },
  button: {
    width: '100%',
    backgroundColor: '#f58220',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: 5,
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: font,
  },
};

export default Login;
