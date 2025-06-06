// Toolbar.js
import React from 'react';

const Toolbar = ({ 
  selectedNodes,
  selectedEdges,
  connectSelectedNodes,
  removeSelection,
  handleUndo,
  handleRedo,
  historyIndex,
  historyLength,
  setShowI2CModal,
  toggleSplitPane 
}) => {
  return (
    <div className="toolbar" style={{ 
      backgroundColor: '#e5e7eb', 
      padding: '8px', 
      display: 'flex', 
      gap: '8px' 
    }}>
      {/* Connect Items Button */}
      <button 
        className={`toolbar-button connect-button ${selectedNodes.length !== 2 ? 'disabled' : ''}`}
        style={{ 
          padding: '8px 16px', 
          borderRadius: '4px', 
          cursor: selectedNodes.length !== 2 ? 'not-allowed' : 'pointer',
          color: 'white',
          backgroundColor: '#3b82f6', // Blue
          border: 'none',
          fontSize: '14px',
          opacity: selectedNodes.length !== 2 ? '0.5' : '1'
        }}
        onClick={connectSelectedNodes}
        disabled={selectedNodes.length !== 2}
      >
        Connect Items
      </button>

      {/* Remove Selection Button */}
      <button 
        className={`toolbar-button remove-button ${selectedNodes.length === 0 && selectedEdges.length === 0 ? 'disabled' : ''}`}
        style={{ 
          padding: '8px 16px', 
          borderRadius: '4px', 
          cursor: (selectedNodes.length === 0 && selectedEdges.length === 0) ? 'not-allowed' : 'pointer',
          color: 'white',
          backgroundColor: '#ef4444', // Red
          border: 'none',
          fontSize: '14px',
          opacity: (selectedNodes.length === 0 && selectedEdges.length === 0) ? '0.5' : '1'
        }}
        onClick={removeSelection}
        disabled={selectedNodes.length === 0 && selectedEdges.length === 0}
      >
        Remove Selection
      </button>

      {/* I2C Address Button */}
      <button 
        className="toolbar-button i2c-button"
        style={{ 
          padding: '8px 16px', 
          borderRadius: '4px', 
          color: 'white',
          backgroundColor: '#ef4444', // Red
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer'
        }}
        onClick={() => setShowI2CModal(true)}
      >
        I2C Address
      </button>

      {/* Undo Button */}
      <button 
        className="toolbar-button undo-button"
        style={{ 
          padding: '8px 16px', 
          borderRadius: '4px', 
          color: 'white',
          backgroundColor: '#6366f1', // Indigo
          border: 'none',
          fontSize: '14px',
          cursor: historyIndex > 0 ? 'pointer' : 'not-allowed',
          opacity: historyIndex > 0 ? '1' : '0.5'
        }}
        onClick={handleUndo}
        disabled={historyIndex <= 0}
      >
        Undo
      </button>


      {/* Redo Button */}
      <button 
        className="toolbar-button redo-button"
        style={{ 
          padding: '8px 16px', 
          borderRadius: '4px', 
          color: 'white',
          backgroundColor: '#6366f1', // Indigo
          border: 'none',
          fontSize: '14px',
          cursor: historyIndex < historyLength - 1 ? 'pointer' : 'not-allowed',
          opacity: historyIndex < historyLength - 1 ? '1' : '0.5'
        }}
        onClick={handleRedo}
        disabled={historyIndex >= historyLength - 1}
      >
        Redo
      </button>
       <button 
        onClick={toggleSplitPane}
        style={{ 
          padding: '4px 8px', 
          backgroundColor: '#fff',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="3" x2="12" y2="21"></line>
        </svg>
        Stack Config
      </button>


    </div>
  );
};

export default Toolbar;