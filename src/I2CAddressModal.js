// I2CAddressModal.js
import React from 'react';

const I2CAddressModal = ({ onClose, i2cAddresses }) => {
  // Function to convert number to hex
  const toHex = (num) => {
    return `0x${num.toString(16).padStart(2, '0')}`;
  };

  // Generate all 255 addresses (1-255)
  const addresses = Array.from({ length: 255 }, (_, i) => i + 1);

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
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '80%',
        maxWidth: '800px',
        maxHeight: '80vh',
        overflow: 'auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h2 style={{ margin: 0 }}>I2C Addresses</h2>
          <button 
            onClick={onClose} 
            style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ overflowY: 'auto', maxHeight: '60vh' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ 
                  padding: '12px', 
                  borderBottom: '2px solid #ddd', 
                  textAlign: 'center',
                  borderRight: '2px solid #ddd' 
                }}>
                  Address
                </th>
                <th style={{ 
                  padding: '12px', 
                  borderBottom: '2px solid #ddd', 
                  textAlign: 'center',
                  borderRight: '2px solid #ddd' 
                }}>
                  Component Name
                </th>
                <th style={{ 
                  padding: '12px', 
                  borderBottom: '2px solid #ddd', 
                  textAlign: 'center'
                }}>
                  Device Name
                </th>
              </tr>
            </thead>
            <tbody>
              {addresses.map(num => {
                const hexAddr = toHex(num);
                const deviceInfo = i2cAddresses[hexAddr];
                return (
                  <tr key={num} style={{ 
                    backgroundColor: deviceInfo ? '#f3f4f6' : 'transparent'
                  }}>
                    <td style={{ 
                      padding: '8px', 
                      borderBottom: '1px solid #ddd',
                      borderRight: '1px solid #ddd',
                      textAlign: 'center' 
                    }}>
                      {hexAddr}
                    </td>
                    <td style={{ 
                      padding: '8px', 
                      borderBottom: '1px solid #ddd',
                      borderRight: '1px solid #ddd'
                    }}>
                      {deviceInfo ? deviceInfo.componentName : ''}
                    </td>
                    <td style={{ 
                      padding: '8px', 
                      borderBottom: '1px solid #ddd'
                    }}>
                      {deviceInfo ? deviceInfo.deviceId : ''}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default I2CAddressModal;