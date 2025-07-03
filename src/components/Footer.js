// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Telegram Weather Bot. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '16px',
    backgroundColor: '#f58220',
    color: '#fff',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '14px',
  },
};

export default Footer;
