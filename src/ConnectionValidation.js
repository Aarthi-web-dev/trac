// Define connection type compatibility map for each node type
// This stores the set of allowed connection types for each node and port

const connectionTypes = {
    'D.PSOC4': { // PSOC4 aarthi
      'top': ['digital', 'power'],
      'right': ['i2c', 'spi', 'analog', 'digital'],
      'left': ['i2c', 'spi', 'analog', 'digital']
    },
    'Image 2': { // VGA
      'right': ['analog'],
      'left': ['i2c', 'analog']
    },
    'Image 3': { // TIA
      'right': ['analog'],
      'left': ['i2c', 'analog']
    },
    'Image 4': { // VIA
      'right': ['analog', 'digital'],
      'left': ['analog']
    },
    'Image 5': { // NIA
      'right': ['analog', 'digital'],
      'left': ['analog', 'i2c']
    },
    'Image 6': { // GIM
      'right': ['analog', 'digital'],
      'bottom': ['analog', 'digital']
    }
  };
  
  // Port-specific connection types (for more fine-grained control if needed)
  const portSpecificTypes = {
    // aarthi
    'D.PSOC4': {
      'right-0': ['i2c'],
      'right-1': ['spi'],
      'left-0': ['i2c'],
      'left-1': ['spi']
    },
    'Image 2': {
      'left-0': ['i2c'],
      'left-1': ['analog']
    }
    // Add more port-specific configurations as needed
  };
  
  /**
   * Validates if a connection is allowed between two ports
   * @param {Object} params - Connection parameters
   * @param {string} params.source - Source node ID
   * @param {string} params.target - Target node ID
   * @param {string} params.sourceHandle - Source port ID
   * @param {string} params.targetHandle - Target port ID
   * @param {Array} nodes - All nodes in the flow
   * @returns {Object} - Validation result with status and message
   */
  const isValidConnection = (params, nodes) => {
    const { source, target, sourceHandle, targetHandle } = params;
    
    // Don't allow connections to self
    if (source === target) {
      return {
        valid: false,
        message: 'Cannot connect a node to itself'
      };
    }
    
    // Find the source and target nodes
    const sourceNode = nodes.find(node => node.id === source);
    const targetNode = nodes.find(node => node.id === target);
    
    if (!sourceNode || !targetNode) {
      return {
        valid: false,
        message: 'Source or target node not found'
      };
    }
    
    // Extract node types
    const sourceType = sourceNode.data.label;
    const targetType = targetNode.data.label;
    
    // Extract port positions and indices
    const [sourcePosition, sourceIndex] = sourceHandle.split('-');
    const [targetPosition, targetIndex] = targetHandle.split('-');
    
    // Basic port position validation
    // Source should be right/bottom, target should be left/top for proper direction
    if (!((sourcePosition === 'right' || sourcePosition === 'bottom') && 
          (targetPosition === 'left' || targetPosition === 'top'))) {
      return {
        valid: false,
        message: 'Invalid connection direction'
      };
    }
    
    // Get connection types for source and target ports
    let sourceAllowedTypes = [];
    let targetAllowedTypes = [];
    
    // Check for port-specific types first, then fall back to position-based types
    if (portSpecificTypes[sourceType] && portSpecificTypes[sourceType][sourceHandle]) {
      sourceAllowedTypes = portSpecificTypes[sourceType][sourceHandle];
    } else if (connectionTypes[sourceType] && connectionTypes[sourceType][sourcePosition]) {
      sourceAllowedTypes = connectionTypes[sourceType][sourcePosition];
    }
    
    if (portSpecificTypes[targetType] && portSpecificTypes[targetType][targetHandle]) {
      targetAllowedTypes = portSpecificTypes[targetType][targetHandle];
    } else if (connectionTypes[targetType] && connectionTypes[targetType][targetPosition]) {
      targetAllowedTypes = connectionTypes[targetType][targetPosition];
    }
    
    // Find the intersection of allowed connection types
    const allowedIntersection = sourceAllowedTypes.filter(type => 
      targetAllowedTypes.includes(type)
    );
    
    // If the intersection is empty, connection is not allowed
    if (allowedIntersection.length === 0) {
      return {
        valid: false,
        message: `Incompatible connection types between ${sourceType} and ${targetType}`
      };
    }
    
    // Connection is valid
    return {
      valid: true,
      message: 'Connection is valid',
      allowedTypes: allowedIntersection
    };
  };
  
  // Function to get edge style based on connection type
  const getEdgeStyle = (params, nodes) => {
    const validationResult = isValidConnection(params, nodes);
    
    if (!validationResult.valid) {
      // Return style for invalid connection (red dashed line)
      return {
        stroke: '#ef4444',
        strokeWidth: 2,
        strokeDasharray: '5, 5',
      };
    }
    
    // Get the first allowed type from the intersection
    const connectionType = validationResult.allowedTypes[0];
    
    // Style based on connection type
    switch (connectionType) {
      case 'i2c':
        return {
          stroke: '#3b82f6', // blue
          strokeWidth: 2,
        };
      case 'spi':
        return {
          stroke: '#10b981', // green
          strokeWidth: 2,
        };
      case 'analog':
        return {
          stroke: '#f59e0b', // amber
          strokeWidth: 2,
        };
      case 'digital':
        return {
          stroke: '#8b5cf6', // purple
          strokeWidth: 2,
        };
      case 'power':
        return {
          stroke: '#ef4444', // red
          strokeWidth: 3,
        };
      default:
        return {
          stroke: '#666',
          strokeWidth: 2,
        };
    }
  };
  
  // Example implementation of the onConnect function
  const onConnect = (params, nodes, setEdges, saveToHistory) => {
    const validationResult = isValidConnection(params, nodes);
    
    if (!validationResult.valid) {
      // Show notification or error message
      console.error(validationResult.message);
      return;
    }
    
    // Add the edge with the appropriate style
    setEdges((eds) => {
      const updatedEdges = addEdge({
        ...params,
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        style: getEdgeStyle(params, nodes),
        // Store the allowed connection types in the edge data
        data: {
          connectionTypes: validationResult.allowedTypes
        }
      }, eds);
      
      setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
      return updatedEdges;
    });
  };
  
  // Visual indicator component for connection validation
  const ConnectionValidationIndicator = ({ validationResult }) => {
    if (!validationResult) return null;
    
    return (
      <div 
        style={{
          position: 'absolute',
          padding: '5px 10px',
          borderRadius: '4px',
          backgroundColor: validationResult.valid ? '#10b981' : '#ef4444',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          zIndex: 10,
          top: '10px',
          right: '10px',
          opacity: 0.9,
          transition: 'opacity 0.3s'
        }}
      >
        {validationResult.valid 
          ? `Valid: ${validationResult.allowedTypes.join(', ')}` 
          : `Invalid: ${validationResult.message}`}
      </div>
    );
  };
  
  export {
    isValidConnection,
    getEdgeStyle,
    onConnect,
    ConnectionValidationIndicator
  };