import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>
        <img
          src="https://res.cloudinary.com/dk2gu7qmv/image/upload/v1751481364/57f64aac51a7dpklogo500x500_cvaiyq.gif"
          alt="Logo"
          style={styles.logoImg}
          onClick={() => navigate('/')}
        />
      </div>

      <div style={styles.navLinks}>
        <span
          style={styles.navItem}
          onClick={() => navigate('/users')}
          onMouseEnter={(e) => (e.target.style.color = '#f58220')}
          onMouseLeave={(e) => (e.target.style.color = '#333')}
        >
          Users
        </span>
        <span
          style={styles.navItem}
          onClick={() => navigate('/bot-settings')}
          onMouseEnter={(e) => (e.target.style.color = '#f58220')}
          onMouseLeave={(e) => (e.target.style.color = '#333')}
        >
          Bot Settings
        </span>
      </div>

      <div>
        <button onClick={onLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height: '60px',
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    width: 60,
    height: 60,
    objectFit: 'contain',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
  },
  navItem: {
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  logoutBtn: {
    backgroundColor: '#f58220',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    borderRadius: 5,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Navbar;
