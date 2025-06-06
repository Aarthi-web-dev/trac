import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth-context';

export default function SignOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      style={{
        marginLeft: 'auto',
        backgroundColor: '#ef4444',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Logout
    </button>
  );
}