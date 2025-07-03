import React from 'react';
import Navbar from '../components/Navbar';
import Users from '../components/Users';

const UsersPage = ({ onLogout }) => {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={{ padding: 30 }}>
        <h2>👥 Users</h2>
        <Users />
      </div>
    </>
  );
};

export default UsersPage;
