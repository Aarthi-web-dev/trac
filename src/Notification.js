// Notification.js
import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification" style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#ef4444', // Red background
      color: 'white',
      padding: '12px 20px',
      borderRadius: '4px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minWidth: '250px'
    }}>
      {/* Notification message */}
      <span>{message}</span>
      
      {/* Close button */}
      <button 
        onClick={onClose}
        style={{
          marginLeft: '12px',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default Notification;