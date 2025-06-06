import React, { useState, useEffect, useRef } from 'react';

/**
 * Save Dialog component
 * Provides an interface for users to enter a filename to save their work
 */
const SaveDialog = ({ currentFileName, onSave, onCancel }) => {
  const [fileName, setFileName] = useState(currentFileName || '');
  const inputRef = useRef(null);
  
  // Focus the input when dialog opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileName.trim()) {
      onSave(fileName.trim());
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.5rem' }}>Save File</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="fileName" style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontWeight: 'bold' 
            }}>
              File Name:
            </label>
            <input
              id="fileName"
              ref={inputRef}
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              placeholder="Enter file name"
              required
            />
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            gap: '8px'
          }}>
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!fileName.trim()}
              style={{
                padding: '8px 16px',
                backgroundColor: fileName.trim() ? '#3b82f6' : '#93c5fd',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: fileName.trim() ? 'pointer' : 'not-allowed'
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaveDialog;