import React, { useEffect, useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    api.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  };

  const handleUnsubscribe = (id) => {
    api.patch(`/users/${id}`, { subscribed: false })
      .then(() => fetchUsers())
      .catch(err => alert('Failed to unsubscribe'));
  };

  const handleResubscribe = (id) => {
    api.patch(`/users/${id}`, { subscribed: true })
      .then(() => fetchUsers())
      .catch(err => alert('Failed to resubscribe'));
  };

  const handleBlock = (id) => {
    api.patch(`/users/block/${id}`)
      .then(() => fetchUsers())
      .catch(err => alert('Failed to block user'));
  };

  const handleUnblock = (id) => {
    api.patch(`/users/${id}`, { blocked: false })
      .then(() => fetchUsers())
      .catch(err => alert('Failed to unblock user'));
  };

  const handleDelete = () => {
    api.delete(`/users/${deleteUserId}`)
      .then(() => {
        setDeleteUserId(null);
        fetchUsers();
      })
      .catch(err => alert('Failed to delete user'));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Users Overview</h2>
      <div style={styles.tableWrapper}>
        <div style={styles.tableHeader}>
          <div style={styles.col}>🆔 Chat ID</div>
          <div style={styles.col}>👤 Name</div>
          <div style={styles.col}>📍 Location</div>
          <div style={styles.col}>📬 Subscribed</div>
          <div style={styles.col}>🚫 Blocked</div>
          <div style={styles.col}>⚙️ Actions</div>
        </div>

        {users.map(user => (
          <div
            key={user._id}
            style={{
              ...styles.tableRow,
              backgroundColor: user.blocked ? '#fff0f0' : 'white',
            }}
          >
            <div style={styles.col}>{user.chatId}</div>
            <div style={styles.col}>{user.fullName || user.username || '—'}</div>
            <div style={styles.col}>
              {user.location?.name ? user.location.name : '❌ Not Set'}
            </div>
            <div style={styles.col}>
              <span style={{
                backgroundColor: user.subscribed ? '#d4f7e3' : '#fbdcdc',
                color: user.subscribed ? '#28a745' : '#e74c3c',
                padding: '4px 10px',
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
                {user.subscribed ? '✅ Yes' : '❌ No'}
              </span>
            </div>
            <div style={styles.col}>
              <span style={{
                backgroundColor: user.blocked ? '#ffe3e3' : '#e0f7f1',
                color: user.blocked ? '#c0392b' : '#27ae60',
                padding: '4px 10px',
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
                {user.blocked ? '❌ Yes' : '✅ No'}
              </span>
            </div>
            <div style={{ ...styles.col, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {user.subscribed && (
                <button style={styles.actionBtn} onClick={() => handleUnsubscribe(user._id)}>
                  Unsub
                </button>
              )}
              {!user.subscribed && (
                <button style={styles.actionBtn} onClick={() => handleResubscribe(user._id)}>
                  Sub
                </button>
              )}
              {!user.blocked ? (
                <button style={{ ...styles.actionBtn, backgroundColor: '#e74c3c' }} onClick={() => handleBlock(user._id)}>
                  Block
                </button>
              ) : (
                <button style={{ ...styles.actionBtn, backgroundColor: '#6ab04c' }} onClick={() => handleUnblock(user._id)}>
                  Unblock
                </button>
              )}
              <button
                style={{ ...styles.actionBtn, backgroundColor: '#555' }}
                onClick={() => setDeleteUserId(user._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation modal */}
      {deleteUserId && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>⚠️ Confirm Delete</h3>
            <p>This action cannot be undone. Are you sure?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
              <button onClick={() => setDeleteUserId(null)} style={styles.cancelBtn}>Cancel</button>
              <button onClick={handleDelete} style={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: `'Poppins', sans-serif`,
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    color: '#f58220',
    fontSize: 22,
    marginBottom: 20,
  },
  tableWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  tableHeader: {
    display: 'flex',
    backgroundColor: '#fafafa',
    padding: '12px 20px',
    borderBottom: '1px solid #eee',
    fontWeight: 'bold',
    color: '#333',
  },
  tableRow: {
    display: 'flex',
    padding: '12px 20px',
    borderBottom: '1px solid #eee',
    alignItems: 'center',
    fontSize: 14,
    color: '#444',
  },
  col: {
    flex: 1,
    textAlign: 'left',
    minWidth: 100,
  },
  actionBtn: {
    padding: '6px 12px',
    fontSize: 12,
    backgroundColor: '#f58220',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    maxWidth: 400,
    width: '80%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: `'Poppins', sans-serif`,
  },
  cancelBtn: {
    backgroundColor: '#ccc',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 5,
    cursor: 'pointer',
  },
  deleteBtn: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 5,
    cursor: 'pointer',
  },
};

export default Users;
