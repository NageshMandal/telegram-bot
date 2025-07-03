import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div style={styles.container}>
        <div style={styles.backgroundImage}></div>
        <div style={styles.content}>
          <h2 style={styles.heading}>Welcome to the Admin Panel</h2>
          <p style={styles.paragraph}>
            👤 <strong>Telegram Weather Bot</strong> With a passion for automation and a love for clean design, this tool was developed to help users get real-time weather updates based on their current location — directly via Telegram.
          </p>
          <p style={styles.paragraph}>
            🌦️ This app allows you to manage user subscriptions, monitor weather updates, and fine-tune bot behavior from a central dashboard. It uses OpenWeather API to fetch accurate forecasts, and MongoDB to store user data securely.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '80vh',
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
    display: 'flex',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '200px',
    height: '200px',
    transform: 'translate(-50%, -50%)',
    backgroundImage: `url('https://res.cloudinary.com/dk2gu7qmv/image/upload/v1751481125/57f64aac51a7dpklogo500x500_nlnfwr.gif')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    opacity: 0.2,
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    padding: '20px 40px',
    maxWidth: '550px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '12px',
  },
  heading: {
    color: '#f58220',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '16px',
  },
};

export default Dashboard;
