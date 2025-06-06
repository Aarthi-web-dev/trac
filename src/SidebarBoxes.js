// SidebarBoxes.js
import React from 'react';

const SidebarBoxes = ({ onDragStart }) => {
  // Sidebar items definition with image URLs
  const sidebarBoxes = [
    { color: '#fffff', label: 'D.PSOC4', imageUrl: '/pic1.png' },
    { color: '#fffff', label: 'Image 2', imageUrl: '/img1.png' },
    { color: '#fffff', label: 'Image 3', imageUrl: '/s1.png' },
    { color: '#fffff', label: 'Image 4', imageUrl: './img4.png' },
    { color: '#fffff', label: 'Image 5', imageUrl: './img7.png' },
    { color: '#fffff', label: 'Image 6', imageUrl: '' },
    // { color: '#fffff', label: 'Image 5', imageUrl: './img7.png' }

  ];

  return (
    <div className="sidebar" style={{ 
      width: '192px', 
      backgroundColor: '#f3f4f6', 
      padding: '16px', 
      borderRight: '1px solid #d1d5db',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      {/* Button Group */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '16px' 
      }}>
        <button style={{ 
          padding: '8px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          flex: '1', 
          marginRight: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Input
        </button>
        <button style={{ 
          padding: '8px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          flex: '1', 
          margin: '0 4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Output
        </button>
        <button style={{ 
          padding: '8px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          flex: '1', 
          marginLeft: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Control
        </button>
      </div>
      
      {/* Sidebar Items */}
      <div className="sidebar-items" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        overflowY: 'auto',
        paddingRight: '4px'
      }}>
        {sidebarBoxes.map((box, index) => (
          <div 
            key={index}
            className="sidebar-item"
            style={{ 
              height: '96px', 
              backgroundColor: box.color,
              border: '1px solid #d1d5db', 
              borderRadius: '4px', 
              cursor: 'move',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              transition: 'transform 0.2s',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}
            draggable
            onDragStart={(e) => onDragStart(e, box)}
          >
            {/* Show image if available */}
            {box.imageUrl && (
              <div style={{ 
                width: '120px', 
                height: '65px', 
                marginBottom: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src={box.imageUrl} 
                  alt={box.label} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </div>
            )}
            
            {/* Label */}
            <div className="sidebar-item-label" style={{ 
              color: 'white', 
              fontWeight: 'bold', 
              textAlign: 'center',
              fontSize: '14px'
            }}>
              {box.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarBoxes;