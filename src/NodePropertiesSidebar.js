// NodePropertiesSidebar.js
import React, { useState, useEffect } from 'react';


const NodePropertiesSidebar = ({ node, onClose, onUpdateNodeName, onUpdateI2CAddress, i2cAddresses,setNodes }) => {
    const [showAmplifierModal, setShowAmplifierModal] = useState(false);
const [channelConfig, setChannelConfig] = useState([
  { channel: 1, type: '', value1: '', value2: '' },
  { channel: 2, type: '', value1: '', value2: '' },
  { channel: 3, type: '', value1: '', value2: '' },
  { channel: 4, type: '', value1: '', value2: '' },
  { channel: 5, type: '', value1: '', value2: '' },
  { channel: 6, type: '', value1: '', value2: '' },
]);
  // State for form fields
  const [nodeName, setNodeName] = useState(node.data.customName || '');
  const [selectedI2CAddress, setSelectedI2CAddress] = useState('');
  
  // Version states for different node types
  const [version, setVersion] = useState('X'); // Image 1
  const [version1, setVersion1] = useState('X'); // Image 2
  const [versiond, setVersiond] = useState('Y'); // Image 2 supply
  const [version3, setVersion3] = useState('X'); // Image 3
  const [version3d, setVersion3d] = useState('Y'); // Image 3 supply
  const [version6, setVersion6] = useState('X'); // Image 2
  const [version6d, setVersion6d] = useState('Y'); // Image 2 supply


//   // Reset form values when node changes
//   useEffect(() => {
//     // Reset form values when node changes
//     setNodeName(node.data.customName || '');
//     setSelectedI2CAddress('');
    
//     // Reset version states based on node type
//     if (node.data.label === 'Image 1') {
//       setVersion('X');
//     } else if (node.data.label === 'Image 2') {
//       setVersion1('X');
//       setVersiond('Y');
//     } else if (node.data.label === 'Image 3') {
//       setVersion3('X');
//       setVersion3d('Y');
//     }else if (node.data.label === 'Image 6') {
//         setVersion6('X');
//         setVersion6d('Y');
//       }
//   }, [node.id]); // Runs whenever node.id changes
useEffect(() => {
    setNodeName(node.data.customName || '');
  
    // Restore previous selection if available
    if (node.data.label === 'D.PSOC4') {
      setVersion(node.data.version || 'X'); // Use saved value or default
    } else if (node.data.label === 'Image 2') {
      setVersion1(node.data.version1 || 'X');
      setVersiond(node.data.versiond || 'Y');
    } else if (node.data.label === 'Image 3') {
      setVersion3(node.data.version3 || 'X');
      setVersion3d(node.data.version3d || 'Y');
    } else  if (node.data.label === 'Image 6') {
        setVersion6(node.data.version6 || 'X');
        setVersion6d(node.data.version6d || 'Y');
        // Restore channel configuration if available
        if (node.data.channelConfig) {
          setChannelConfig(node.data.channelConfig);
        }
      }
  
    setSelectedI2CAddress(''); // Reset I2C unless restored too
  }, [node.id]);
  const handleTypeChange = (channelIndex, imageIndex) => {
    const updatedConfig = [...channelConfig];
    updatedConfig[channelIndex].type = `./m${imageIndex}.png`;
    setChannelConfig(updatedConfig);
  };
  
  const handleValueChange = (channelIndex, field, value) => {
    const updatedConfig = [...channelConfig];
    updatedConfig[channelIndex][field] = value;
    setChannelConfig(updatedConfig);
  };
  
  const handleDoneClick = () => {
    // Update node data with channel configuration
    const updatedData = { ...node.data, channelConfig };
    setNodes((nodes) =>
      nodes.map((n) => (n.id === node.id ? { ...n, data: updatedData } : n))
    );
    setShowAmplifierModal(false);
  };
  
  // Version change handlers for Image 1
  const handleVersionChange = (e) => {
    const selectedVersion = e.target.value;
    if (selectedVersion === 'Basic') {
      setVersion('B');
    } else if (selectedVersion === 'Advanced') {
      setVersion('A');
    } else {
      setVersion('X');
    }
  };

  // Version change handlers for Image 2
  const handleVersionChange1 = (e) => {
    const selectedVersion = e.target.value;
    if (selectedVersion === 'General Purpose (GP)') {
      setVersion1('GP');
    } else if (selectedVersion === 'Zero drift (ZD)') {
      setVersion1('ZD');
    } else if (selectedVersion === 'Zero drift Low noise (ZDLN)') {
      setVersion1('ZDLN');
    } else {
      setVersion1('X');
    }
  };

  const handleVersionChanged = (e) => {
    const selectedVersion = e.target.value;
    if (selectedVersion === 'Single Supply (S)') {
      setVersiond('S');
    } else if (selectedVersion === 'Dual Supply (D)') {
      setVersiond('D');
    } else {
      setVersiond('Y');
    }
  };

  // Version change handlers for Image 3
  const handleVersionChange3 = (e) => {
    const selectedVersion = e.target.value;
    if (selectedVersion === 'General Purpose (GP)') {
      setVersion3('GP');
    } else if (selectedVersion === 'Zero drift (ZD)') {
      setVersion3('ZD');
    } else if (selectedVersion === 'Zero drift Low noise (ZDLN)') {
      setVersion3('ZDLN');
    } else {
      setVersion3('X');
    }
  };

  const handleVersionChange3d = (e) => {
    const selectedVersion = e.target.value;
    if (selectedVersion === 'Single Supply (S)') {
      setVersion3d('S');
    } else if (selectedVersion === 'Dual Supply (D)') {
      setVersion3d('D');
    } else {
      setVersion3d('Y');
    }
  };
    // Version change handlers for Image 6
    const handleVersionChange6 = (e) => {
        const selectedVersion = e.target.value;
        if (selectedVersion === 'General Purpose (GP)') {
          setVersion6('GP');
        } else if (selectedVersion === 'Zero drift (ZD)') {
          setVersion6('ZD');
        } else if (selectedVersion === 'Zero drift Low noise (ZDLN)') {
          setVersion6('ZDLN');
        } else {
          setVersion6('X');
        }
      };
    
      const handleVersionChange6d = (e) => {
        const selectedVersion = e.target.value;
        if (selectedVersion === 'Single Supply (S)') {
          setVersion6d('S');
        } else if (selectedVersion === 'Dual Supply (D)') {
          setVersion6d('D');
        } else {
          setVersion6d('Y');
        }
      };
    

  // Handle node name change
  const handleNameChange = (e) => {
    setNodeName(e.target.value);
  };

  // Handle I2C address change
  const handleI2CAddressChange = (e) => {
    setSelectedI2CAddress(e.target.value);
  };

  // Apply changes when button is clicked
//   const applyChanges = () => {
//     onUpdateNodeName(node.id, nodeName);
    
//     // Only update I2C address if one is selected and the component supports it
//     if (selectedI2CAddress && (node.data.label === 'Image 2' || node.data.label === 'Image 3' )) {
//       const deviceId = node.data.label === 'Image 2' 
//         ? `I.VGA.${version1}.${versiond}` 
//         : `I.TIA.${version3}.${version3d}`;
      
//       onUpdateI2CAddress(selectedI2CAddress, nodeName, deviceId);
//     }
//   };
// const applyChanges = () => {
//     onUpdateNodeName(node.id, nodeName);
  
//     const updatedData = { ...node.data };
  
//     if (node.data.label === 'Image 1') {
//       updatedData.version = version;
//     } else if (node.data.label === 'Image 2') {
//       updatedData.version1 = version1;
//       updatedData.versiond = versiond;
//     } else if (node.data.label === 'Image 3') {
//       updatedData.version3 = version3;
//       updatedData.version3d = version3d;
//     } else  if (node.data.label === 'Image 6') {
//         updatedData.version6 = version6;
//         updatedData.version6d = version6d;
//         updatedData.channelConfig = channelConfig;
//       }
  
//     // Save updated data back to node using setNodes
//     setNodes((nodes) =>
//       nodes.map((n) => (n.id === node.id ? { ...n, data: updatedData } : n))
//     );
  
//     // Only update I2C address if one is selected and the component supports it
//     if (selectedI2CAddress && (node.data.label === 'Image 2' || node.data.label === 'Image 3')) {
//       const deviceId = node.data.label === 'Image 2'
//         ? `I.VGA.${version1}.${versiond}`
//         : `I.TIA.${version3}.${version3d}`;
//       onUpdateI2CAddress(selectedI2CAddress, nodeName, deviceId);
//     }
//   };  
const applyChanges = () => {
  onUpdateNodeName(node.id, nodeName); // Still call this for history or external usage if needed

  const updatedData = { ...node.data, customName: nodeName };

  if (node.data.label === 'D.PSOC4') {
    updatedData.version = version;
  } else if (node.data.label === 'Image 2') {
    updatedData.version1 = version1;
    updatedData.versiond = versiond;
  } else if (node.data.label === 'Image 3') {
    updatedData.version3 = version3;
    updatedData.version3d = version3d;
  } else if (node.data.label === 'Image 6') {
    updatedData.version6 = version6;
    updatedData.version6d = version6d;
    updatedData.channelConfig = channelConfig;
  }

  setNodes((nodes) =>
    nodes.map((n) => (n.id === node.id ? { ...n, data: updatedData } : n))
  );

  // Handle I2C Address logic only if selected
  if (
    selectedI2CAddress &&
    (node.data.label === 'Image 2' || node.data.label === 'Image 3')
  ) {
    const deviceId = node.data.label === 'Image 2'
      ? `I.VGA.${version1}.${versiond}`
      : `I.TIA.${version3}.${version3d}`;
    onUpdateI2CAddress(selectedI2CAddress, nodeName, deviceId);
  }
};
  
  // Don't render if node is null
  if (!node) return null;

  return (
    <div className="node-properties-sidebar" style={{
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '350px',
      backgroundColor: '#285D', // Red background
      color: 'white',
      padding: '16px',
      boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: 0 }}>Dockable</h3>
        <button 
          onClick={onClose} 
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          ✕
        </button>
      </div>

      {/* Image 3 Specific Properties */}
      {node.data.label === 'Image 3' && (
        <div style={{ marginBottom: '12px', textAlign: 'center' }}>
          <strong style={{ 
            color: 'black', 
            height: '30px', 
            width: '90px',  
            padding: '2px 8px', 
            borderRadius: '4px', 
            display: 'inline-block'
          }}>
            I.TIA.{version3}.{version3d}
          </strong>
          
          {/* Name Input */}
          <div style={{ marginTop: '12px' }}>
            <label>Name:</label>
            <input 
              type="text" 
              value={nodeName} 
              onChange={handleNameChange}
              style={{ 
                width: '100%', 
                padding: '4px', 
                marginTop: '4px',
                border: 'none',
                borderRadius: '4px'
              }}
            />
          </div>
          
          {/* Circuit Diagram Images */}
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/s2.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/s3.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          {/* Amplifier Type Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Amplifier type (X):
            </span>
            <select 
              onChange={handleVersionChange3} 
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="Default">Select Version</option>
              <option value="General Purpose (GP)">General Purpose (GP)</option>
              <option value="Zero drift (ZD)">Zero drift (ZD)</option>
              <option value="Zero drift Low noise (ZDLN)">Zero drift Low noise (ZDLN)</option>
            </select>
          </div>
          
          {/* Supply Type Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Supply type (Y):
            </span>
            <select 
              onChange={handleVersionChange3d}
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="Default">Select Version</option>
              <option value="Single Supply (S)">Single Supply (S)</option>
              <option value="Dual Supply (D)">Dual Supply (D)</option>
            </select>
          </div>
          
          {/* I2C Address Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              I2C Address:
            </span>
            <select 
              onChange={handleI2CAddressChange} 
              value={selectedI2CAddress}
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="">Select Address</option>
              {[
                '0x20', '0x22', '0x23', '0x28', '0x2A', 
                '0x2B', '0x2C', '0x2E', '0x2F'
              ].map(address => (
                <option 
                  key={address} 
                  value={address}
                  disabled={i2cAddresses[address] && selectedI2CAddress !== address}
                  style={{
                    backgroundColor: i2cAddresses[address] && selectedI2CAddress !== address 
                      ? '#d1d5db' 
                      : 'white'
                  }}
                >
                  {address} {i2cAddresses[address] ? '' : ''}
                </option>
              ))}
            </select>
          </div>
          
          {/* Links */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Datasheet link:
            </span>
            <a href="" style={{ color: 'black' }}>Link1</a>
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Github library link:
            </span>
            <a href="" style={{ color: 'black' }}>Link1</a>
          </div>
        </div>
      )}

      {/* Image 2 Specific Properties */}
      {node.data.label === 'Image 2' && (
        <div style={{ marginBottom: '12px', textAlign: 'center' }}>
          <strong style={{ 
            color: 'black', 
            height: '30px', 
            width: '90px',  
            padding: '2px 8px', 
            borderRadius: '4px', 
            display: 'inline-block'
          }}>
            I.VGA.{version1}.{versiond}
          </strong>
          
          {/* Name Input */}
          <div style={{ marginTop: '12px' }}>
            <label>Name:</label>
            <input 
              type="text" 
              value={nodeName} 
              onChange={handleNameChange}
              style={{ 
                width: '100%', 
                padding: '4px', 
                marginTop: '4px',
                border: 'none',
                borderRadius: '4px'
              }}
            />
          </div>
          
          {/* Circuit Diagram Images */}
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/img2.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/img3.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          {/* Amplifier Type Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Amplifier type (X):
            </span>
            <select 
              onChange={handleVersionChange1} 
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="Default">Select Version</option>
              <option value="General Purpose (GP)">General Purpose (GP)</option>
              <option value="Zero drift (ZD)">Zero drift (ZD)</option>
              <option value="Zero drift Low noise (ZDLN)">Zero drift Low noise (ZDLN)</option>
            </select>
          </div>
          
          {/* Supply Type Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Supply type (Y):
            </span>
            <select 
              onChange={handleVersionChanged}
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="Default">Select Version</option>
              <option value="Single Supply (S)">Single Supply (S)</option>
              <option value="Dual Supply (D)">Dual Supply (D)</option>
            </select>
          </div>
          
          {/* I2C Address Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              I2C Address:
            </span>
            <select 
              onChange={handleI2CAddressChange} 
              value={selectedI2CAddress}
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="">Select Address</option>
              {[
                '0x20', '0x22', '0x23', '0x28', '0x2A', 
                '0x2B', '0x2C', '0x2E', '0x2F'
              ].map(address => (
                <option 
                  key={address} 
                  value={address}
                  disabled={i2cAddresses[address] && selectedI2CAddress !== address}
                  style={{
                    backgroundColor: i2cAddresses[address] && selectedI2CAddress !== address 
                      ? '#d1d5db' 
                      : 'white'
                  }}
                >
                  {address} {i2cAddresses[address] ? '' : ''}
                </option>
              ))}
            </select>
          </div>
          
          {/* Links */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Datasheet link:
            </span>
            <a href="" style={{ color: 'black' }}>Link1</a>
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Github library link:
            </span>
            <a href="" style={{ color: 'black' }}>Link1</a>
          </div>
        </div>
      )}

      {/* Image 1 Specific Properties */}
      {node.data.label === 'D.PSOC4' && (
        <div style={{ marginBottom: '12px', textAlign: 'center' }}>
          <strong style={{ 
            color: 'black', 
            height: '30px', 
            width: '90px',  
            padding: '2px 8px', 
            borderRadius: '4px', 
            display: 'inline-block'
          }}>
            D.PSOC4.{version}
          </strong>
          
          {/* Name Input */}
          <div style={{ marginTop: '12px' }}>
            <label>Name:</label>
            <input 
              type="text" 
              value={nodeName} 
              onChange={handleNameChange}
              style={{ 
                width: '100%', 
                padding: '4px', 
                marginTop: '4px',
                border: 'none',
                borderRadius: '4px'
              }}
            />
          </div>
          
          {/* Circuit Diagram Images */}
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/pic2.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/pict3.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          {/* Version Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Version:
            </span>
            <select 
              onChange={handleVersionChange}
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="Default">Select Version</option>
              <option value="Basic">Basic</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      )}

{node.data.label === 'Image 4' && (
        <div style={{ marginBottom: '12px', textAlign: 'center' }}>
          <strong style={{color:'black',height:'30px' ,width:'90px',  padding: '2px 8px', borderRadius: '4px', display: 'inline-block'}}>
          I.VIA.{version3}.{version3d}
          </strong>
          <div>
            <label>Name:</label>
            <input type="text"  value={nodeName} 
              onChange={handleNameChange}/>
          </div>
          <div style={{ marginTop: '1px', backgroundColor: 'white', padding: '2px', borderRadius: '4px' }}>
            <img 
              src="/img5.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          <div style={{ marginTop: '1px', backgroundColor: 'white', padding: '2px', borderRadius: '4px' }}>
            <img 
              src="/img6.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          <div>
        <div 
        style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}}>
  <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
    Amplifier type (X):
  </span>
  <select onChange={handleVersionChange3} style={{ flexGrow: 1 }}>
    <option value="Default">Select Version</option>
    <option value="General Purpose (GP)">General Purpose (GP)</option>
    <option value="Zero drift (ZD)">Zero drift (ZD)</option>
    <option value="Zero drift Low noise (ZDLN)">Zero drift Low noise (ZDLN)</option>
  </select>
</div>
      </div>

      <div
      style={{ 
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px'
      }}>
        <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
   Supply type (Y):
  </span>
        <select onChange={handleVersionChange3d}>
          <option value="Default">Select Version</option>
          <option value="Single Supply (S)">Single Supply (S)</option>
          <option value="Dual Supply (D)">Dual Supply (D)</option>

        </select>
      </div>
  <div style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}}>
  {/* <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px' }}>I2C Address </span><br/> */}
  <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
I2C Address:  </span>
  <select onChange={handleI2CAddressChange} value={selectedI2CAddress}>
    <option value="">Select Address</option>
    {[
      '0x20', '0x22', '0x23', '0x28', '0x2A', 
      '0x2B', '0x2C', '0x2E', '0x2F'
    ].map(address => (
      <option 
        key={address} 
        value={address}
        disabled={i2cAddresses[address] && (!selectedI2CAddress || selectedI2CAddress !== address)}
        style={{
          backgroundColor: i2cAddresses[address] && (!selectedI2CAddress || selectedI2CAddress !== address) 
            ? '#d1d5db' 
            : 'white'
        }}
      >
        {address} {i2cAddresses[address] ? `` : ''}
      </option>
    ))}
  </select>
</div>
  <div style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}}>
        {/* <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px'  }}>Datasheet link:</span> */}
        <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
    Datasheet link:
  </span>
        <a href="">Link1</a>
      </div>
      <div style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}} >
        {/* <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px'  }}>Github library link:</span> */}
        <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
Github library link:  </span>
        <a href="">Link1</a>
      </div>
      <div></div>


        </div>
      )}
{node.data.label === 'Image 5' && (
        <div style={{ marginBottom: '12px', textAlign: 'center' }}>
          <strong style={{color:'black',height:'30px' ,width:'90px',  padding: '2px 8px', borderRadius: '4px', display: 'inline-block'}}>
          I.NIA.{version3}.{version3d}
          </strong>
          <div>
            <label>Name:</label>
            <input type="text"  value={nodeName} 
              onChange={handleNameChange}/>
          </div>
          <div style={{ marginTop: '1px', backgroundColor: 'white', padding: '2px', borderRadius: '4px' }}>
            <img 
              src="/img8.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          <div style={{ marginTop: '1px', backgroundColor: 'white', padding: '2px', borderRadius: '4px' }}>
            <img 
              src="/img9.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          <div>
        <div 
        style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}}>
  <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
    Amplifier type (X):
  </span>
  <select onChange={handleVersionChange3} style={{ flexGrow: 1 }}>
    <option value="Default">Select Version</option>
    <option value="General Purpose (GP)">General Purpose (GP)</option>
    <option value="Zero drift (ZD)">Zero drift (ZD)</option>
    <option value="Zero drift Low noise (ZDLN)">Zero drift Low noise (ZDLN)</option>
  </select>
</div>
      </div>

      <div
      style={{ 
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px'
      }}>
        <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
   Supply type (Y):
  </span>
        <select onChange={handleVersionChange3d}>
          <option value="Default">Select Version</option>
          <option value="Single Supply (S)">Single Supply (S)</option>
          <option value="Dual Supply (D)">Dual Supply (D)</option>

        </select>
      </div>
  <div style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}}>
        {/* <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px'  }}>Datasheet link:</span> */}
        <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
    Datasheet link:
  </span>
        <a href="">Link1</a>
      </div>
      <div style={{ 
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px'
}} >
        {/* <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px'  }}>Github library link:</span> */}
        <span style={{ 
    fontSize: '16px', 
    fontWeight: 'bold', 
    marginRight: '10px' 
  }}>
Github library link:  </span>
        <a href="">Link1</a>
      </div>
      <div></div>


        </div>
      )}
       {/* For image6 */}
       {node.data.label === 'Image 6' && (
        <div style={{ marginBottom: '12px', textAlign: 'center' }}>
          <strong style={{ 
            color: 'black', 
            height: '30px', 
            width: '90px',  
            padding: '2px 8px', 
            borderRadius: '4px', 
            display: 'inline-block'
          }}>
            I.GIM.{version6d}
          </strong>
          
          {/* Name Input */}
          <div style={{ marginTop: '12px' }}>
            <label>Name:</label>
            <input 
              type="text" 
              value={nodeName} 
              onChange={handleNameChange}
              style={{ 
                width: '100%', 
                padding: '4px', 
                marginTop: '4px',
                border: 'none',
                borderRadius: '4px'
              }}
            />
          </div>
          
          {/* Circuit Diagram Images */}
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="/G2.png" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          <div style={{ 
            marginTop: '16px', 
            backgroundColor: 'white', 
            padding: '2px', 
            borderRadius: '4px' 
          }}>
            <img 
              src="" 
              alt="Circuit Diagram" 
              style={{ 
                width: '300px', 
                height: '200px', 
                objectFit: 'contain'
              }} 
            />
          </div>
          
          {/* Amplifier Type Selection */}
          {/* <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Amplifier type (X):
            </span>
           <input type="text"/>
          </div> */}
           <div style={{ 
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px'
    }}>
      <span style={{ 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginRight: '10px' 
      }}>
        Input Type:
      </span>
      <div 
        onClick={() => setShowAmplifierModal(true)} 
        style={{
          flexGrow: 1,
          padding: '4px',
          borderRadius: '4px',
          border: '1px solid #ccc', 
          backgroundColor: '#fff',
          cursor: 'pointer'
        }}
      >
        {channelConfig.some(c => c.type) ? 'Configuration Set' : 'Click to configure'}
      </div>
    </div>
          
          {/* Supply Type Selection */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              DAC Verision (Y):
            </span>
            <select 
              onChange={handleVersionChange6d}
              style={{ 
                flexGrow: 1,
                padding: '4px',
                borderRadius: '4px',
                border: 'none'
              }}
            >
              <option value="Default">Select Version</option>
              <option value="Single Supply (S)">Single Supply (S)</option>
              <option value="Dual Supply (D)">Dual Supply (D)</option>
            </select>
          </div>
          
          
          {/* Links */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Datasheet link:
            </span>
            <a href="" style={{ color: 'black' }}>Link1</a>
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <span style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginRight: '10px' 
            }}>
              Github library link:
            </span>
            <a href="" style={{ color: 'black' }}>Link1</a>
          </div>
        </div>
      )}

       


      {/* Apply Changes Button */}
      <div style={{ marginTop: 'auto' }}>
        <button 
          style={{
            backgroundColor: 'white',
            color: '#ef4444',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%'
          }} 
          onClick={applyChanges}
        >
          Apply Changes
        </button>
      </div>
      {showAmplifierModal && (
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
      borderRadius: '8px',
      padding: '20px',
      width: '80%',
      maxWidth: '600px',
      maxHeight: '80vh',
      overflowY: 'auto'
    }}>
      <h3 style={{ textAlign: 'center', margin: '0 0 20px 0', color: '#333' }}>Input Type</h3>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #eee' }}>
            <th style={{ padding: '8px', textAlign: 'left',color:'black' }}>Channel No</th>
            <th style={{ padding: '8px', textAlign: 'left' ,color:'black' }}>Type</th>
            <th style={{ padding: '8px', textAlign: 'left',color:'black'  }}>Value 1</th>
            <th style={{ padding: '8px', textAlign: 'left' ,color:'black' }}>Value 2</th>
          </tr>
        </thead>
        <tbody>
          {channelConfig.map((config, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px',color:'black' }}>{config.channel}</td>
              <td style={{ padding: '8px' }}>
                <div style={{ position: 'relative' }}>
                  <button 
                    onClick={() => {
                      const dropdown = document.getElementById(`dropdown-${index}`);
                      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                    }} 
                    style={{
                      backgroundColor: '#f0f0f0',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%'
                    }}
                  >
                    {config.type ? (
                      <img 
                        src={config.type} 
                        alt={`Type ${index + 1}`} 
                        style={{ width: '50px', height: '50px' }} 
                      />
                    ) : (
                      <span>Select</span>
                    )}
                    <span>▼</span>
                  </button>
                  <div 
                    id={`dropdown-${index}`} 
                    style={{
                      display: 'none',
                      position: 'absolute',
                      backgroundColor: 'white',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                      zIndex: 5,
                      width: '300px',
                      height: '1000px',
                      overflowY: 'bone',
                      marginTop: '4px'
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map(imgNum => (
                      <div 
                        key={imgNum} 
                        onClick={() => {
                          handleTypeChange(index, imgNum);
                          document.getElementById(`dropdown-${index}`).style.display = 'none';
                        }}
                        style={{
                          padding: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          borderBottom: '1px solid #eee'
                        }}
                      >
                        <img 
                          src={`./m${imgNum}.png`} 
                          alt={`Option ${imgNum}`} 
                          style={{ width: '100px', height: '100px', marginRight: '8px' }} 
                        />
                        <span>Image {imgNum}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </td>
              <td style={{ padding: '8px' }}>
                <input 
                  type="text" 
                  value={config.value1} 
                  onChange={(e) => handleValueChange(index, 'value1', e.target.value)}
                  style={{ width: '100%', padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </td>
              <td style={{ padding: '8px' }}>
                <input 
                  type="text" 
                  value={config.value2} 
                  onChange={(e) => handleValueChange(index, 'value2', e.target.value)}
                  style={{ width: '100%', padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button 
          onClick={handleDoneClick}
          style={{
            backgroundColor: '#285D',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Done
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default NodePropertiesSidebar;