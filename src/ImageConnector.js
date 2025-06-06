// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import SplitPane from 'react-split-pane';
// import BoardConfigPanel from './BoardConfigPanel';
// // import  { Background, Controls, MiniMap } from 'react-flow-renderer';

// import { useAuth } from './auth-context';
// import { Navigate } from 'react-router-dom';
// import ReactFlow, {
//   ReactFlowProvider,
//   Background,
//   Controls,
//   MiniMap,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   MarkerType,
//   ConnectionLineType
// } from 'reactflow';

// // Import custom components
// import ColorBoxNode from './ColorBoxNode';
// import Notification from './Notification';
// import I2CAddressModal from './I2CAddressModal';
// import NodePropertiesSidebar from './NodePropertiesSidebar';
// import Toolbar from './Toolbar';
// import SidebarBoxes from './SidebarBoxes';
// import SignOut from './SignOut';
// import CreateFileDialog from './CreateFileDialog';
// import FileListDialog from './FileListDialog';
// // Import CSS
// import 'reactflow/dist/style.css';

// // Define node types
// const nodeTypes = {
//   colorBox: ColorBoxNode
// };

// // Default edge style
// const customEdgeStyles = {
//   stroke: '#666',
//   strokeWidth: 2,
//   fill: 'none'
// };

// export default function ImageConnector() {
//   const [connections, setConnections] = useState({});
//   const [boardOrder, setBoardOrder] = useState([]);

//   const toggleSplitPane = useCallback(() => {
//     setShowSplitPane(prev => !prev);
//   }, []);
//   const [showSplitPane, setShowSplitPane] = useState(false);
//   const [paneSize, setPaneSize] = useState("50%");
//   // Add this inside ImageConnector component
//   const PORT_RULES = {
//     'Image 2': {
//       'left-0': { allow: [0,2, 4,6,8,10,12,14,16 ] },
//       'right-0': { allow: [0,2, 4,6,8,10,12,14,16 ] },
//       'left-1': {allow: [1, 3,5,7,9,11,13,15 ] },
//       'right-1': {allow: [1, 3,5,7,9,11,13,15 ]  }
//     },
//     'Image 5': {
//       'right-0': { allow: [0,8 ] },
//       'right-1': { allow: [1,9 ] },
//       'right-2': { allow: [2,10 ] },
//       'right-3': { allow: [3,11] },
//       'right-4': { allow: [4,12] },
//       'right-5': { allow: [5,13] },
//       'right-6': { allow: [6,14] },
//       'right-7': { allow: [7,15] },
//       'left-0': { allow: [0,8 ] },
//       'left-1': { allow: [1,9 ] },
//       'left-2': { allow: [2,10 ] },
//       'left-3': { allow: [3,11] },
//       'left-4': { allow: [4,12] },
//       'left-5': { allow: [5,13] },
//       'left-6': { allow: [6,14] },
//       'left-7': { allow: [7,15] },
//     },
//     'Image 4': {
//       'right-0': { allow: [0,2,4,6,8,10,12,14] },
//       'right-1': { allow: [1,3,5,7,9,11,13,15] },
//       'left-0': { allow: [0,4,8,12 ] },
//       'left-1': { allow: [1,5,9,13] },
//       'left-2': { allow: [2,6,10,14 ] },
//       'left-3': { allow: [3,7,11,15] },
//     },

//     'Image 6': {
//       'right-0': { allow: [0,8 ] },
//       'right-1': { allow: [1,9 ] },
//       'right-2': { allow: [2,10 ] },
//       'right-3': { allow: [3,11] },
//       'right-4': { allow: [4,12] },
//       'right-5': { allow: [5,13] },
//       'right-6': { allow: [6,14] },
//       'right-7': { allow: [7,15] },
//     },

//     'Image 3': {
//       'left-0': { allow: [0,2, 4,6,8,10,12,14,16 ]},
//       'left-1': { allow: [1, 3,5,7,9,11,13,15]},
//       'right-0': { allow: [0,2, 4,6,8,10,12,14,16 ]},
//       'right-1': { allow: [1, 3,5,7,9,11,13,15 ]}
//     }
//   };  
  

//   // Make sure we have the user object early in the component
//   const { user, loading } = useAuth();
//   const userId = user?.uid || user?.id || 'anonymous'; // Use 'anonymous' as fallback if uid/id is not available
  
//   if (loading) return <div>Loading...</div>;
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // Node and Edge Management
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [nextId, setNextId] = useState(1);
//   const [blockCounts, setBlockCounts] = useState({
//     // aarthi
//     'D.PSOC4': 0,
//     'Image 2': 0,
//     'Image 3': 0,
//     'Image 4': 0,
//     'Image 5': 0,
//     'Image 6': 0
//   });

//   // Selection and UI states
//   const [selectedNodes, setSelectedNodes] = useState([]);
//   const [selectedEdges, setSelectedEdges] = useState([]);
//   const [notification, setNotification] = useState(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showI2CModal, setShowI2CModal] = useState(false);
  
//   // File dialogs states
//   const [showCreateFileDialog, setShowCreateFileDialog] = useState(false);
//   const [showFileListDialog, setShowFileListDialog] = useState(false);
//   const [savedFiles, setSavedFiles] = useState([]);
//   const [currentFileName, setCurrentFileName] = useState(null);

//   // History management for undo/redo
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [isHistoryAction, setIsHistoryAction] = useState(false);

//   // I2C Address state
//   const [i2cAddresses, setI2cAddresses] = useState({});

//   // Ref for ReactFlow instance
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);

//   // Load saved files from localStorage for the current user
//   useEffect(() => {
//     if (user) {
//       try {
//         // Use the user-specific key to load files
//         const userSpecificKey = `savedFiles_${userId}`;
//         const storedFiles = localStorage.getItem(userSpecificKey);
//         if (storedFiles) {
//           setSavedFiles(JSON.parse(storedFiles));
//         } else {
//           // Initialize empty array if no files exist for this user
//           setSavedFiles([]);
//         }
//       } catch (error) {
//         console.error('Error loading saved files:', error);
//         setSavedFiles([]);
//       }
//     }
//   }, [userId, user]);

//   // Calculate highest node ID when loading files
//   const calculateNextIdFromNodes = (loadedNodes) => {
//     if (!loadedNodes || loadedNodes.length === 0) return 1;
    
//     let highestId = 0;
//     loadedNodes.forEach(node => {
//       const idStr = node.id.replace('node-', '');
//       const idNum = parseInt(idStr, 10);
//       if (!isNaN(idNum) && idNum > highestId) {
//         highestId = idNum;
//       }
//     });
    
//     return highestId + 1;
//   };

//   // Save state to history (for undo/redo)
//   const saveToHistory = useCallback((currentNodes, currentEdges) => {
//     if (isHistoryAction) {
//       setIsHistoryAction(false);
//       return;
//     }

//     const currentState = {
//       nodes: JSON.parse(JSON.stringify(currentNodes)),
//       edges: JSON.parse(JSON.stringify(currentEdges))
//     };

//     const newHistory = history.slice(0, historyIndex + 1);
//     setHistory([...newHistory, currentState]);
//     setHistoryIndex(newHistory.length);
//   }, [history, historyIndex, isHistoryAction]);

//   // Handle node and edge changes and update history
//   const handleNodesChange = useCallback((changes) => {
//     onNodesChange(changes);
//     setNodes((nds) => {
//       const updatedNodes = [...nds];
//       setTimeout(() => saveToHistory(updatedNodes, edges), 0);
//       return updatedNodes;
//     });
//   }, [onNodesChange, edges, saveToHistory]);

//   const handleNodeOrderChange = useCallback((reorderedNodes) => {
//     // Update the node positions based on the new order
//     const updatedNodes = reorderedNodes.map((node, index) => ({
//       ...node,
//       position: { x: node.position.x, y: index * 100 }, // Adjust Y position based on index
//     }));

//     // Update the nodes state in React Flow
//     setNodes(updatedNodes);

//     // Optionally, save this change to history
//     saveToHistory(updatedNodes, edges);
//     setBoardOrder(orderedNodeIds);
//   }, [setNodes, edges, saveToHistory,setBoardOrder]);

//   const handleEdgesChange = useCallback((changes) => {
//     onEdgesChange(changes);
//     setEdges((eds) => {
//       const updatedEdges = [...eds];
//       setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
//       return updatedEdges;
//     });
//   }, [onEdgesChange, nodes, saveToHistory]);

//   // Drag & Drop logic
//   const onDragStart = useCallback((event, box) => {
//     event.dataTransfer.setData('application/reactflow', JSON.stringify(box));
//     event.dataTransfer.effectAllowed = 'move';
//   }, []);

//   const onDrop = useCallback((event) => {
//     event.preventDefault();
//     if (!reactFlowInstance) return;

//     const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//     const position = reactFlowInstance.screenToFlowPosition({
//       x: event.clientX,
//       y: event.clientY
//     });

//     const newCount = blockCounts[data.label] + 1;
//     setBlockCounts((prev) => ({
//       ...prev,
//       [data.label]: newCount
//     }));

//     let defaultName;
//     // aarthi
//     if (data.label === 'D.PSOC4') {
//       defaultName = `D.PSOC4(${newCount})`;
//     } else if (data.label === 'Image 2') {
//       defaultName = `I.VGA(${newCount})`;
//     } else if (data.label === 'Image 3') {
//       defaultName = `I.TIA(${newCount})`;
//     } else if (data.label === 'Image 4') {
//       defaultName = `I.VIA(${newCount})`;
//     } else if (data.label === 'Image 5') {
//       defaultName = `I.NIA(${newCount})`;
//     }
//     else if (data.label === 'Image 6') {
//       defaultName = `I.GIM(${newCount})`;
//     } else {
//       defaultName = `${data.label}(${newCount})`;
//     }

//     const newNode = {
//       id: `node-${nextId}`,
//       type: 'colorBox',
//       position,
//       data: {
//         label: data.label,
//         color: data.color,
//         imageUrl: data.imageUrl || '',
//         customName: defaultName
//       }
//     };

//     setNodes((nds) => nds.concat(newNode));
//     setNextId((id) => id + 1);
    
//     // Save to history after adding node
//     setTimeout(() => {
//       setNodes(currentNodes => {
//         saveToHistory(currentNodes, edges);
//         return currentNodes;
//       });
//     }, 100);
    
//   }, [nextId, blockCounts, setNodes, edges, reactFlowInstance, saveToHistory]);

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   // Node click handlers
//   const onNodeClick = useCallback((event, node) => {
//     setSelectedNode(node);
//     setShowSidebar(true);
//     event.stopPropagation();
//   }, []);

//   const onPaneClick = useCallback(() => {
//     setShowSidebar(false);
//     setSelectedNode(null);
//   }, []);

//   // Connect selected nodes
//   const connectSelectedNodes = useCallback(() => {
//     if (selectedNodes.length !== 2) return;

//     const [sourceNode, targetNode] = selectedNodes;
//     const sourceHandle = 'right-0';
//     const targetHandle = 'left-0';

//     const connectionParams = {
//       source: sourceNode.id,
//       target: targetNode.id,
//       sourceHandle,
//       targetHandle
//     };

//     if (!isValidConnection(connectionParams)) return;

//     const newEdge = {
//       id: `edge-${sourceNode.id}-${targetNode.id}`,
//       ...connectionParams,
//       type: 'smoothstep',
//       markerEnd: {
//         type: MarkerType.ArrowClosed
//       },
//       style: getEdgeStyle(sourceHandle, targetHandle)
//     };

//     setEdges((eds) => {
//       const edgeExists = eds.some(
//         edge =>
//           edge.source === sourceNode.id &&
//           edge.target === targetNode.id &&
//           edge.sourceHandle === sourceHandle &&
//           edge.targetHandle === targetHandle
//       );
//       if (!edgeExists) {
//         const updatedEdges = eds.concat(newEdge);
//         setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
//         return updatedEdges;
//       }
//       return eds;
//     });
//   }, [selectedNodes, setEdges, nodes, saveToHistory]);
//   // const isPortAlreadyConnected = useCallback((nodeId, handleId) => {
//   //   return edges.some(
//   //     edge =>
//   //       (edge.source === nodeId && edge.sourceHandle === handleId) ||
//   //       (edge.target === nodeId && edge.targetHandle === handleId)
//   //   );
//   // }, [edges]);
//   const isPortAlreadyConnected = useCallback((nodeId, handleId) => {
//     return edges.some(
//       edge =>
//         (edge.source === nodeId && edge.sourceHandle === handleId) ||
//         (edge.target === nodeId && edge.targetHandle === handleId)
//     );
//   }, [edges]);

//   // Function to show error indicator at a specific port
// const showErrorIndicator = (nodeId, portHandle) => {
//   // Find the port element in the DOM
//   const portElement = document.querySelector(`[data-nodeid="${nodeId}"] [data-handleid="${portHandle}"]`);
  
//   if (portElement) {
//     // Create a cross mark element
//     const crossMark = document.createElement('div');
//     crossMark.className = 'port-error-indicator';
//     crossMark.innerHTML = '❌'; // Cross mark symbol
    
//     // Style the cross mark
//     crossMark.style.position = 'absolute';
//     crossMark.style.fontSize = '14px';
//     crossMark.style.color = 'red';
//     crossMark.style.pointerEvents = 'none'; // Make it non-interactive
    
//     // Position the cross mark based on port side (left or right)
//     if (portHandle.startsWith('left')) {
//       crossMark.style.left = '-20px';
//       crossMark.style.top = '0';
//     } else {
//       crossMark.style.right = '-20px';
//       crossMark.style.top = '0';
//     }
    
//     // Add the cross mark to the port element
//     portElement.style.position = 'relative'; // Ensure port has relative positioning
//     portElement.appendChild(crossMark);
    
//     // Remove the cross mark after 2 seconds
//     setTimeout(() => {
//       if (crossMark.parentElement) {
//         crossMark.parentElement.removeChild(crossMark);
//       }
//     }, 2000);
//   }
// };

// // CSS styles to add to your stylesheet
// const errorIndicatorStyles = `
// .port-error-indicator {
//   animation: fadeInOut 2s ease-in-out;
//   z-index: 1000;
// }

// @keyframes fadeInOut {
//   0% { opacity: 0; }
//   20% { opacity: 1; }
//   80% { opacity: 1; }
//   100% { opacity: 0; }
// }
// `;


// // Add the styles to the document
// const addErrorIndicatorStyles = () => {
//   const styleElement = document.createElement('style');
//   styleElement.textContent = errorIndicatorStyles;
//   document.head.appendChild(styleElement);
// };

// // Call this function when your app initializes
// useEffect(() => {
//   addErrorIndicatorStyles();
// }, []);
  
//   const isValidConnection = useCallback((params) => {
//     const sourceNode = nodes.find(n => n.id === params.source);
//     const targetNode = nodes.find(n => n.id === params.target);
  
//     if (!sourceNode || !targetNode) return false;
  
//     // Prevent self-connection
//     if (params.source === params.target) {
//       setNotification('Invalid connection: You cannot connect a node to itself.');
//       return false;
//     }
  
//     const sourcePort = params.sourceHandle;
//     const targetPort = params.targetHandle;
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     // Check Image 1 port restriction (for both source and target)
//     // aarthi
//     if (sourceLabel === "D.PSOC4") {
//       const match = sourcePort.match(/(left|right)-(\d+)/);
//       if (match) {
//         const [, side, index] = match;
//         const oppositeSide = side === 'left' ? 'right' : 'left';
//         const oppositePort = `${oppositeSide}-${index}`;
        
//         if (isPortAlreadyConnected(params.source, oppositePort)) {
//           setNotification(`Invalid connection: Cannot connect from ${sourcePort} because ${oppositePort} is already connected.`);
//           return false;
//         }
//       }
//     }
//     // aarthi
//     if (targetLabel === "D.PSOC4") {
//       const match = targetPort.match(/(left|right)-(\d+)/);
//       if (match) {
//         const [, side, index] = match;
//         const oppositeSide = side === 'left' ? 'right' : 'left';
//         const oppositePort = `${oppositeSide}-${index}`;
        
//         if (isPortAlreadyConnected(params.target, oppositePort)) {
//           setNotification(`Invalid connection: Cannot connect to ${targetPort} because ${oppositePort} is already connected.`);
//           return false;
//         }
//       }
//     }
    
//     // Check port rules from source to target
//     const sourceRule = PORT_RULES[sourceLabel]?.[sourcePort];
//     if (sourceRule) {
//       const targetPortNumber = parseInt(targetPort.split('-')[1], 10);
      
//       // Rule: allow specific list
//       if (sourceRule.allow && !sourceRule.allow.includes(targetPortNumber)) {
//         setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) cannot connect to port ${targetPort}`);
//         return false;
//       }
      
//       // Rule: even-only
//       if (sourceRule.even && targetPortNumber % 2 !== 0) {
//         setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) requires even-numbered port.`);
//         return false;
//       }
      
//       // Rule: odd-only
//       if (sourceRule.odd && targetPortNumber % 2 !== 1) {
//         setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) requires odd-numbered port.`);
//         return false;
//       }
//     }
    
//     // Check port rules from target to source (important for bidirectional validation)
//     const targetRule = PORT_RULES[targetLabel]?.[targetPort];
//     if (targetRule) {
//       const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
      
//       // Rule: allow specific list
//       if (targetRule.allow && !targetRule.allow.includes(sourcePortNumber)) {
//         setNotification(`Invalid connection: ${targetLabel}(${targetPort}) cannot connect to port ${sourcePort}`);
//         return false;
//       }
      
//       // Rule: even-only
//       if (targetRule.even && sourcePortNumber % 2 !== 0) {
//         setNotification(`Invalid connection: ${targetLabel}(${targetPort}) requires even-numbered port.`);
//         return false;
//       }
      
//       // Rule: odd-only
//       if (targetRule.odd && sourcePortNumber % 2 !== 1) {
//         setNotification(`Invalid connection: ${targetLabel}(${targetPort}) requires odd-numbered port.`);
//         return false;
//       }
//     }
  
//     return true;
//   }, [nodes, isPortAlreadyConnected]);
//   // Edge style based on connection
//   // const getEdgeStyle = useCallback((sourceHandle, targetHandle) => {
//   //   const isTopToTop =
//   //     sourceHandle && targetHandle &&
//   //     sourceHandle.startsWith('top-') &&
//   //     targetHandle.startsWith('top-');

//   //   return {
//   //     stroke: '#666',
//   //     strokeWidth: 2,
//   //     fill: 'none',
//   //     strokeDasharray: isTopToTop ? '5, 5' : undefined,
//   //   };
//   // }, []);
//   const getEdgeStyle = useCallback((sourceHandle, targetHandle, isValid = true) => {
//     return {
//       stroke: isValid ? '#666' : '#ef4444',
//       strokeWidth: 2,
//       fill: 'none',
//       strokeDasharray: isValid ? undefined : '5,5'
//     };
//   }, []);
//   // Undo handler
//   const handleUndo = useCallback(() => {
//     if (historyIndex > 0) {
//       setIsHistoryAction(true);
//       const newIndex = historyIndex - 1;
//       const previousState = history[newIndex];
//       setNodes(previousState.nodes);
//       setEdges(previousState.edges);
//       setHistoryIndex(newIndex);
//     }
//   }, [history, historyIndex]);

//   // Redo handler
//   const handleRedo = useCallback(() => {
//     if (historyIndex < history.length - 1) {
//       setIsHistoryAction(true);
//       const newIndex = historyIndex + 1;
//       const nextState = history[newIndex];
//       setNodes(nextState.nodes);
//       setEdges(nextState.edges);
//       setHistoryIndex(newIndex);
//     }
//   }, [history, historyIndex]);

//   // Update I2C address map
//   const updateI2CAddress = useCallback((address, componentName, deviceId) => {
//     setI2cAddresses((prev) => ({
//       ...prev,
//       [address]: { componentName, deviceId }
//     }));
//   }, []);
  
//   // Handle selection changes - memoized to prevent re-renders
//   const onSelectionChange = useCallback(({ nodes, edges }) => {
//     setSelectedNodes(nodes || []);
//     setSelectedEdges(edges || []);
//   }, []);

//   // Update node name
//   const updateNodeName = useCallback((nodeId, newName) => {
//     setNodes((nds) => {
//       const updatedNodes = nds.map((node) =>
//         node.id === nodeId
//           ? {
//               ...node,
//               data: {
//                 ...node.data,
//                 customName: newName
//               }
//             }
//           : node
//       );
//       setTimeout(() => saveToHistory(updatedNodes, edges), 0);
//       return updatedNodes;
//     });
//   }, [setNodes, edges, saveToHistory]);

//   // Remove selected nodes or edges
//   const removeSelection = useCallback(() => {
//     if (selectedNodes.length > 0 || selectedEdges.length > 0) {
//       const nodesToRemove = new Set(selectedNodes.map(n => n.id));
      
//       setNodes((nds) => {
//         const updatedNodes = nds.filter(node => !nodesToRemove.has(node.id));
//         setEdges((eds) => {
//           const updatedEdges = eds.filter(edge =>
//             !nodesToRemove.has(edge.source) &&
//             !nodesToRemove.has(edge.target) &&
//             !selectedEdges.some(e => e.id === edge.id)
//           );
//           setTimeout(() => saveToHistory(updatedNodes, updatedEdges), 0);
//           return updatedEdges;
//         });
//         return updatedNodes;
//       });

//       if (selectedNode && nodesToRemove.has(selectedNode.id)) {
//         setShowSidebar(false);
//         setSelectedNode(null);
//       }
//     }
//   }, [selectedNodes, selectedEdges, selectedNode, saveToHistory]);

//   // Handle connect edges
//   // const onConnect = useCallback((params) => {
//   //   if (!isValidConnection(params)) return;
    
//   //   setEdges((eds) => {
//   //     const updatedEdges = addEdge({
//   //       ...params,
//   //       type: 'smoothstep',
//   //       markerEnd: {
//   //         type: MarkerType.ArrowClosed
//   //       },
//   //       style: getEdgeStyle(params.sourceHandle, params.targetHandle)
//   //     }, eds);
      
//   //     setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
//   //     return updatedEdges;
//   //   });
//   // }, [isValidConnection, getEdgeStyle, nodes, saveToHistory]);
//   const onConnect = useCallback((params) => {
//     const isValid = isValidConnection(params);
//     if (!isValid) return;
  
//     const newEdge = {
//       id: `edge-${params.source}-${params.target}`,
//       ...params,
//       type: 'smoothstep',
//       markerEnd: {
//         type: MarkerType.ArrowClosed
//       },
//       style: getEdgeStyle(params.sourceHandle, params.targetHandle, true)
//     };
  
//     setEdges((eds) => addEdge(newEdge, eds));
//   }, [isValidConnection, getEdgeStyle]);

//   // Initialize history
//   useEffect(() => {
//     if (history.length === 0) {
//       saveToHistory([], []);
//     }
//   }, [history.length, saveToHistory]);

//   // Handle File actions
//   const handleCreateNewFile = () => {
//     setShowCreateFileDialog(true);
//   };

//   const handleSaveNewFile = (fileName) => {
//     setNodes([]);
//     setEdges([]);
//     setNextId(1);
//     setBlockCounts({
//       'D.PSOC4': 0,
//       'Image 2': 0,
//       'Image 3': 0,
//       'Image 4': 0,
//       'Image 5': 0,
//       'Image 6': 0
//     });
//     setCurrentFileName(fileName);
//     setHistory([{ nodes: [], edges: [] }]);
//     setHistoryIndex(0);
//     setNotification(`New file "${fileName}" created`);
//     setShowCreateFileDialog(false);
    
//     // Save the empty file
//     saveFile(fileName);
//   };

//   const handleOpenFile = (fileName) => {
//     try {
//       // Use user-specific key to load file data
//       const fileData = localStorage.getItem(`file_${userId}_${fileName}`);
//       if (fileData) {
//         const parsedData = JSON.parse(fileData);
        
//         // Reset ReactFlow if needed
//         if (reactFlowInstance) {
//           reactFlowInstance.fitView();
//         }
        
//         // Set the data
//         const loadedNodes = parsedData.nodes || [];
//         const loadedEdges = parsedData.edges || [];
        
//         // Update nextId based on loaded nodes
//         const newNextId = calculateNextIdFromNodes(loadedNodes);
//         setNextId(newNextId);
        
//         // Set nodes and edges
//         setNodes(loadedNodes);
//         setEdges(loadedEdges);
        
//         // Set other related data
//         setBlockCounts(parsedData.blockCounts || {
//           'D.PSOC4': 0,
//           'Image 2': 0,
//           'Image 3': 0,
//           'Image 4': 0,
//           'Image 5': 0,
//           'Image 6': 0
//         });
//         setI2cAddresses(parsedData.i2cAddresses || {});
        
//         // Update history for undo/redo
//         setHistory([{ nodes: loadedNodes, edges: loadedEdges }]);
//         setHistoryIndex(0);
        
//         setCurrentFileName(fileName);
//         setNotification(`File "${fileName}" opened successfully`);
        
//         // Add a short delay to allow ReactFlow to properly render nodes
//         setTimeout(() => {
//           if (reactFlowInstance) {
//             reactFlowInstance.fitView();
//           }
//         }, 300);
//       }
//     } catch (error) {
//       console.error('Error opening file:', error);
//       setNotification('Error opening file');
//     }
//     setShowFileListDialog(false);
//   };

//   const handleDeleteFile = (fileName) => {
//     try {
//       // Remove file from localStorage
//       localStorage.removeItem(`file_${userId}_${fileName}`);
      
//       // Update savedFiles list
//       const updatedFiles = savedFiles.filter(file => file !== fileName);
//       setSavedFiles(updatedFiles);
//       localStorage.setItem(`savedFiles_${userId}`, JSON.stringify(updatedFiles));
      
//       // If the deleted file was the current one, clear the current file
//       if (currentFileName === fileName) {
//         handleCreateNewFile();
//       }
      
//       setNotification(`File "${fileName}" deleted successfully`);
//     } catch (error) {
//       console.error('Error deleting file:', error);
//       setNotification('Error deleting file');
//     }
//   };

//   const saveCurrentBlockCountsState = useCallback(() => {
//     // Calculate actual block counts from nodes
//     const actualCounts = {
//       'D.PSOC4': 0,
//       'Image 2': 0,
//       'Image 3': 0,
//       'Image 4': 0,
//       'Image 5': 0,
//       'Image 6': 0
//     };
    
//     nodes.forEach(node => {
//       if (node.data && node.data.label) {
//         if (actualCounts[node.data.label] !== undefined) {
//           actualCounts[node.data.label]++;
//         }
//       }
//     });
    
//     return actualCounts;
//   }, [nodes]);

//   const saveFile = useCallback((fileName) => {
//     try {
//       // Save current accurate blockCounts based on actual nodes
//       const currentBlockCounts = saveCurrentBlockCountsState();
      
//       const fileData = {
//         nodes,
//         edges,
//         blockCounts: currentBlockCounts,
//         i2cAddresses,
//         createdBy: userId,
//         createdAt: new Date().toISOString(),
//         lastModified: new Date().toISOString()
//       };
      
//       // Save file with user-specific key
//       localStorage.setItem(`file_${userId}_${fileName}`, JSON.stringify(fileData));
      
//       // Update saved files list if this is a new file
//       if (!savedFiles.includes(fileName)) {
//         const updatedFiles = [...savedFiles, fileName];
//         setSavedFiles(updatedFiles);
//         // Store the user's file list separately with user-specific key
//         localStorage.setItem(`savedFiles_${userId}`, JSON.stringify(updatedFiles));
//       }
      
//       setCurrentFileName(fileName);
//       setNotification(`File "${fileName}" saved successfully`);
//     } catch (error) {
//       console.error('Error saving file:', error);
//       setNotification('Error saving file');
//     }
//   }, [nodes, edges, i2cAddresses, userId, savedFiles, saveCurrentBlockCountsState]);

//   const handleSaveFile = () => {
//     if (currentFileName) {
//       // Save to existing file
//       saveFile(currentFileName);
//     } else {
//       // Open create file dialog if no filename exists
//       setShowCreateFileDialog(true);
//     }
//   };

//   return (
//     <div className="app-container" style={{
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100vh',
//       position: 'relative'
//     }}>
//       {/* Notification */}
//       {notification && (
//         <Notification message={notification} onClose={() => setNotification(null)} />
//       )}

//       {/* Top Toolbar with File/Open buttons */}
//       <div className="toolbar" style={{ 
//         backgroundColor: '#e5e7eb', 
//         padding: '8px', 
//         display: 'flex', 
//         gap: '8px', 
//         height: '30px',
//         justifyContent: 'space-between'
//       }}>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <button 
//             onClick={handleCreateNewFile}
//             style={{ 
//               padding: '2px 8px', 
//               backgroundColor: 'transparent',
//               border: '1px solid #9ca3af',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px'
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//               <polyline points="14 2 14 8 20 8"></polyline>
//               <line x1="12" y1="18" x2="12" y2="12"></line>
//               <line x1="9" y1="15" x2="15" y2="15"></line>
//             </svg>
//             New
//           </button>
//           <button 
//             onClick={() => setShowFileListDialog(true)}
//             style={{ 
//               padding: '2px 8px', 
//               backgroundColor: 'transparent',
//               border: '1px solid #9ca3af',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px'
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             Open
//           </button>
//           <button 
//             onClick={handleSaveFile}
//             style={{ 
//               padding: '2px 8px', 
//               backgroundColor: 'transparent',
//               border: '1px solid #9ca3af',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px'
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
//               <polyline points="17 21 17 13 7 13 7 21"></polyline>
//               <polyline points="7 3 7 8 15 8"></polyline>
//             </svg>
//             Save
//           </button>
//           {currentFileName && (
//             <span style={{ alignSelf: 'center', marginLeft: '8px', color: '#4b5563', fontSize: '0.9rem' }}>
//               {currentFileName}
//             </span>
//           )}
//         </div>
//         <SignOut />
//       </div>

//       <div style={{ display: 'flex', flex: 1 }}>
//         {/* Left Sidebar with draggable items */}
//         <SidebarBoxes onDragStart={onDragStart} />

//         {/* Main Canvas */}
//         <div className="main-content" style={{ flex: '1', position: 'relative' }}>
//           {/* Toolbar with actions */}
//           <Toolbar
//             selectedNodes={selectedNodes}
//             selectedEdges={selectedEdges}
//             connectSelectedNodes={connectSelectedNodes}
//             removeSelection={removeSelection}
//             handleUndo={handleUndo}
//             handleRedo={handleRedo}
//             historyIndex={historyIndex}
//             historyLength={history.length}
//             setShowI2CModal={setShowI2CModal}
//             toggleSplitPane={toggleSplitPane}
//             showSplitPane={showSplitPane}
//           />
          

//           {/* Canvas wrapper */}
//           {/* <div ref={reactFlowWrapper} style={{ height: 'calc(100% - 40px)' }}>
//             <ReactFlowProvider>
//               <ReactFlow
//                 nodes={nodes}
//                 edges={edges}
//                 onNodesChange={handleNodesChange}
//                 onEdgesChange={handleEdgesChange}
//                 onConnect={onConnect}
//                 nodeTypes={nodeTypes}
//                 onInit={setReactFlowInstance}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 onSelectionChange={onSelectionChange}
//                 onNodeClick={onNodeClick}
//                 onPaneClick={onPaneClick}
//                 connectionLineType={ConnectionLineType.SmoothStep}
//                 defaultEdgeOptions={{
//                   type: 'smoothstep',
//                   style: customEdgeStyles,
//                   markerEnd: {
//                     type: MarkerType.ArrowClosed
//                   }
//                 }}
//                 fitView
//                 zoomOnScroll={false}
//                 panOnScroll
//                 panOnScrollMode="free"
//                 zoomOnDoubleClick={false}
//                 deleteKeyCode={['Backspace', 'Delete']}
//                 multiSelectionKeyCode={['Control', 'Meta']}
//               >
//                 <Background color="#999" gap={16} />
//                 <Controls />
//                 <MiniMap />
//               </ReactFlow>
//             </ReactFlowProvider>
//           </div> */}

// {showSplitPane ? (
//     <div style={{ height: 'calc(100% - 40px)' }}>
//       <SplitPane
//         split="vertical"
//         defaultSize="50%"
//           resizerClassName="custom-resizer"
//           size={paneSize}
//   onChange={(newSize) => setPaneSize(newSize)}
//         style={{ position: 'relative' }}
//       >
//         {/* Left side - Flow canvas */}
//         <div ref={reactFlowWrapper} style={{ height: '100%' }}>
//           <ReactFlowProvider>
//             <ReactFlow
//               nodes={nodes}
//               edges={edges}
//               onNodesChange={handleNodesChange}
//               onEdgesChange={handleEdgesChange}
//               onConnect={onConnect}
//               nodeTypes={nodeTypes}
//               onInit={setReactFlowInstance}
//               onDrop={onDrop}
//               onDragOver={onDragOver}
//               onSelectionChange={onSelectionChange}
//               onNodeClick={onNodeClick}
//               onPaneClick={onPaneClick}
//               connectionLineType={ConnectionLineType.SmoothStep}
//               defaultEdgeOptions={{
//                 type: 'smoothstep',
//                 style: customEdgeStyles,
//                 markerEnd: {
//                   type: MarkerType.ArrowClosed
//                 }
//               }}
//               fitView
//               zoomOnScroll={false}
//               panOnScroll
//               panOnScrollMode="free"
//               zoomOnDoubleClick={false}
//               deleteKeyCode={['Backspace', 'Delete']}
//               multiSelectionKeyCode={['Control', 'Meta']}
//             >
//               <Background color="#999" gap={16} />
//               <Controls />
//               <MiniMap />
//             </ReactFlow>
//           </ReactFlowProvider>
//         </div>
                
//         {/* Right side - Configuration panel */}
//         <div style={{ height: '100%', overflow: 'auto', padding: '15px', backgroundColor: '#f9fafb' }}>
//           <h3>Stack Configuratio</h3>
//           <div>
//             {/* <p>hi</p> */}
//             {/* <BoardConfigPanel 
//             // nodes={nodes} onNodeOrderChange={handleNodeOrderChange} 
//             nodes={boardOrder.length > 0
//               ? boardOrder.map(id => nodes.find(n => n.id === id))
//               : nodes
//             }
//             onNodeOrderChange={handleNodeOrderChange}


//             /> */}
//             <BoardConfigPanel 
//   nodes={boardOrder.length > 0
//     ? boardOrder.map(id => nodes.find(n => n.id === id)).filter(Boolean)
//     : nodes
//   }
//   edges={edges}
//   PORT_RULES={PORT_RULES}
//   onNodeOrderChange={handleNodeOrderChange}
// />
// {/* <BoardConfigPanel 
//   nodes={boardOrder.length > 0
//     ? boardOrder.map(id => nodes.find(n => n.id === id))
//     : nodes
//   }
//   edges={edges}
//   PORT_RULES={PORT_RULES}
// />     */}
//         {/* You can add your configuration components here */}
//           </div>
//         </div>
//       </SplitPane>
//     </div>
//   ) : (
//     <div ref={reactFlowWrapper} style={{ height: 'calc(100% - 40px)' }}>
//       <ReactFlowProvider>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={handleNodesChange}
//           onEdgesChange={handleEdgesChange}
//           onConnect={onConnect}
//           nodeTypes={nodeTypes}
//           onInit={setReactFlowInstance}
//           onDrop={onDrop}
//           onDragOver={onDragOver}
//           onSelectionChange={onSelectionChange}
//           onNodeClick={onNodeClick}
//           onPaneClick={onPaneClick}
//           connectionLineType={ConnectionLineType.SmoothStep}
//           defaultEdgeOptions={{
//             type: 'smoothstep',
//             style: customEdgeStyles,
//             markerEnd: {
//               type: MarkerType.ArrowClosed
//             }
//           }}
//           fitView
//           zoomOnScroll={false}
//           panOnScroll
//           panOnScrollMode="free"
//           zoomOnDoubleClick={false}
//           deleteKeyCode={['Backspace', 'Delete']}
//           multiSelectionKeyCode={['Control', 'Meta']}
//         >
//           <Background color="#999" gap={16} />
//           <Controls />
//           <MiniMap />
//         </ReactFlow>
//       </ReactFlowProvider>
//     </div>)}

//           {/* Node Properties Sidebar */}
//           {showSidebar && selectedNode && (
//             <NodePropertiesSidebar
//               node={selectedNode}
//               onClose={() => setShowSidebar(false)}
//               onUpdateNodeName={updateNodeName}
//               onUpdateI2CAddress={updateI2CAddress}
//               i2cAddresses={i2cAddresses}
//               setNodes={setNodes}
              

//             />
//           )}
//         </div>
//       </div>

//       {/* I2C Address Modal */}
//       {showI2CModal && (
//         <I2CAddressModal
//           onClose={() => setShowI2CModal(false)}
//           i2cAddresses={i2cAddresses}
//         />
//       )}

//       {/* Create File Dialog */}
//       {showCreateFileDialog && (
//         <CreateFileDialog
//           onSave={handleSaveNewFile}
//           onCancel={() => setShowCreateFileDialog(false)}
//         />
//       )}

//       {/* File List Dialog */}
//       {showFileListDialog && (
//         <FileListDialog
//           files={savedFiles}
//           onOpen={handleOpenFile}
//           onDelete={handleDeleteFile}
//           onClose={() => setShowFileListDialog(false)}
//         />
//       )}
//     </div>
//   );
// }












// going well-1
// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import SplitPane from 'react-split-pane';
// import BoardConfigPanel from './BoardConfigPanel';
// // import  { Background, Controls, MiniMap } from 'react-flow-renderer';

// import { useAuth } from './auth-context';
// import { Navigate } from 'react-router-dom';
// import ReactFlow, {
//   ReactFlowProvider,
//   Background,
//   Controls,
//   MiniMap,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   MarkerType,
//   ConnectionLineType
// } from 'reactflow';

// // Import custom components
// import ColorBoxNode from './ColorBoxNode';
// import Notification from './Notification';
// import I2CAddressModal from './I2CAddressModal';
// import NodePropertiesSidebar from './NodePropertiesSidebar';
// import Toolbar from './Toolbar';
// import SidebarBoxes from './SidebarBoxes';
// import SignOut from './SignOut';
// import CreateFileDialog from './CreateFileDialog';
// import FileListDialog from './FileListDialog';
// // Import CSS
// import 'reactflow/dist/style.css';

// // Define node types
// const nodeTypes = {
//   colorBox: ColorBoxNode
// };

// // Default edge style
// const customEdgeStyles = {
//   stroke: '#666',
//   strokeWidth: 2,
//   fill: 'none'
// };

// export default function ImageConnector() {
//   const [connections, setConnections] = useState({});
//   const [boardOrder, setBoardOrder] = useState([]);

//   const toggleSplitPane = useCallback(() => {
//     setShowSplitPane(prev => !prev);
//   }, []);
//   const [showSplitPane, setShowSplitPane] = useState(false);
//   const [paneSize, setPaneSize] = useState("50%");
//   // Add this inside ImageConnector component
//   const PORT_RULES = {
//     'Image 2': {
//       'left-0': { allow: [0,2, 4,6,8,10,12,14,16 ] },
//       'right-0': { allow: [0,2, 4,6,8,10,12,14,16 ] },
//       'left-1': {allow: [1, 3,5,7,9,11,13,15 ] },
//       'right-1': {allow: [1, 3,5,7,9,11,13,15 ]  }
//     },
//     'Image 5': {
//       'right-0': { allow: [0,8 ] },
//       'right-1': { allow: [1,9 ] },
//       'right-2': { allow: [2,10 ] },
//       'right-3': { allow: [3,11] },
//       'right-4': { allow: [4,12] },
//       'right-5': { allow: [5,13] },
//       'right-6': { allow: [6,14] },
//       'right-7': { allow: [7,15] },
//       'left-0': { allow: [0,8 ] },
//       'left-1': { allow: [1,9 ] },
//       'left-2': { allow: [2,10 ] },
//       'left-3': { allow: [3,11] },
//       'left-4': { allow: [4,12] },
//       'left-5': { allow: [5,13] },
//       'left-6': { allow: [6,14] },
//       'left-7': { allow: [7,15] },
//     },
//     'Image 4': {
//       'right-0': { allow: [0,2,4,6,8,10,12,14] },
//       'right-1': { allow: [1,3,5,7,9,11,13,15] },
//       'left-0': { allow: [0,4,8,12 ] },
//       'left-1': { allow: [1,5,9,13] },
//       'left-2': { allow: [2,6,10,14 ] },
//       'left-3': { allow: [3,7,11,15] },
//     },

//     'Image 6': {
//       'right-0': { allow: [0,8 ] },
//       'right-1': { allow: [1,9 ] },
//       'right-2': { allow: [2,10 ] },
//       'right-3': { allow: [3,11] },
//       'right-4': { allow: [4,12] },
//       'right-5': { allow: [5,13] },
//       'right-6': { allow: [6,14] },
//       'right-7': { allow: [7,15] },
//     },

//     'Image 3': {
//       'left-0': { allow: [0,2, 4,6,8,10,12,14,16 ]},
//       'left-1': { allow: [1, 3,5,7,9,11,13,15]},
//       'right-0': { allow: [0,2, 4,6,8,10,12,14,16 ]},
//       'right-1': { allow: [1, 3,5,7,9,11,13,15 ]}
//     }
//   };  
  

//   // Make sure we have the user object early in the component
//   const { user, loading } = useAuth();
//   const userId = user?.uid || user?.id || 'anonymous'; // Use 'anonymous' as fallback if uid/id is not available
  
//   if (loading) return <div>Loading...</div>;
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // Node and Edge Management
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [nextId, setNextId] = useState(1);
//   const [blockCounts, setBlockCounts] = useState({
//     // aarthi
//     'D.PSOC4': 0,
//     'Image 2': 0,
//     'Image 3': 0,
//     'Image 4': 0,
//     'Image 5': 0,
//     'Image 6': 0
//   });

//   // Selection and UI states
//   const [selectedNodes, setSelectedNodes] = useState([]);
//   const [selectedEdges, setSelectedEdges] = useState([]);
//   const [notification, setNotification] = useState(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showI2CModal, setShowI2CModal] = useState(false);
  
//   // File dialogs states
//   const [showCreateFileDialog, setShowCreateFileDialog] = useState(false);
//   const [showFileListDialog, setShowFileListDialog] = useState(false);
//   const [savedFiles, setSavedFiles] = useState([]);
//   const [currentFileName, setCurrentFileName] = useState(null);

//   // History management for undo/redo
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [isHistoryAction, setIsHistoryAction] = useState(false);

//   // I2C Address state
//   const [i2cAddresses, setI2cAddresses] = useState({});

//   // Ref for ReactFlow instance
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);

//   // Load saved files from localStorage for the current user
//   useEffect(() => {
//     if (user) {
//       try {
//         // Use the user-specific key to load files
//         const userSpecificKey = `savedFiles_${userId}`;
//         const storedFiles = localStorage.getItem(userSpecificKey);
//         if (storedFiles) {
//           setSavedFiles(JSON.parse(storedFiles));
//         } else {
//           // Initialize empty array if no files exist for this user
//           setSavedFiles([]);
//         }
//       } catch (error) {
//         console.error('Error loading saved files:', error);
//         setSavedFiles([]);
//       }
//     }
//   }, [userId, user]);

//   // Calculate highest node ID when loading files
//   const calculateNextIdFromNodes = (loadedNodes) => {
//     if (!loadedNodes || loadedNodes.length === 0) return 1;
    
//     let highestId = 0;
//     loadedNodes.forEach(node => {
//       const idStr = node.id.replace('node-', '');
//       const idNum = parseInt(idStr, 10);
//       if (!isNaN(idNum) && idNum > highestId) {
//         highestId = idNum;
//       }
//     });
    
//     return highestId + 1;
//   };

//   // Save state to history (for undo/redo)
//   const saveToHistory = useCallback((currentNodes, currentEdges) => {
//     if (isHistoryAction) {
//       setIsHistoryAction(false);
//       return;
//     }

//     const currentState = {
//       nodes: JSON.parse(JSON.stringify(currentNodes)),
//       edges: JSON.parse(JSON.stringify(currentEdges))
//     };

//     const newHistory = history.slice(0, historyIndex + 1);
//     setHistory([...newHistory, currentState]);
//     setHistoryIndex(newHistory.length);
//   }, [history, historyIndex, isHistoryAction]);

//   // Handle node and edge changes and update history
//   const handleNodesChange = useCallback((changes) => {
//     onNodesChange(changes);
//     setNodes((nds) => {
//       const updatedNodes = [...nds];
//       setTimeout(() => saveToHistory(updatedNodes, edges), 0);
//       return updatedNodes;
//     });
//   }, [onNodesChange, edges, saveToHistory]);

//   const handleNodeOrderChange = useCallback((reorderedNodes) => {
//     // Update the node positions based on the new order
//     const updatedNodes = reorderedNodes.map((node, index) => ({
//       ...node,
//       position: { x: node.position.x, y: index * 100 }, // Adjust Y position based on index
//     }));

//     // Update the nodes state in React Flow
//     setNodes(updatedNodes);

//     // Optionally, save this change to history
//     saveToHistory(updatedNodes, edges);
//     setBoardOrder(orderedNodeIds);
//   }, [setNodes, edges, saveToHistory,setBoardOrder]);

//   const handleEdgesChange = useCallback((changes) => {
//     onEdgesChange(changes);
//     setEdges((eds) => {
//       const updatedEdges = [...eds];
//       setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
//       return updatedEdges;
//     });
//   }, [onEdgesChange, nodes, saveToHistory]);

//   // Drag & Drop logic
//   const onDragStart = useCallback((event, box) => {
//     event.dataTransfer.setData('application/reactflow', JSON.stringify(box));
//     event.dataTransfer.effectAllowed = 'move';
//   }, []);

//   const onDrop = useCallback((event) => {
//     event.preventDefault();
//     if (!reactFlowInstance) return;

//     const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//     const position = reactFlowInstance.screenToFlowPosition({
//       x: event.clientX,
//       y: event.clientY
//     });

//     const newCount = blockCounts[data.label] + 1;
//     setBlockCounts((prev) => ({
//       ...prev,
//       [data.label]: newCount
//     }));

//     let defaultName;
//     // aarthi
//     if (data.label === 'D.PSOC4') {
//       defaultName = `D.PSOC4(${newCount})`;
//     } else if (data.label === 'Image 2') {
//       defaultName = `I.VGA(${newCount})`;
//     } else if (data.label === 'Image 3') {
//       defaultName = `I.TIA(${newCount})`;
//     } else if (data.label === 'Image 4') {
//       defaultName = `I.VIA(${newCount})`;
//     } else if (data.label === 'Image 5') {
//       defaultName = `I.NIA(${newCount})`;
//     }
//     else if (data.label === 'Image 6') {
//       defaultName = `I.GIM(${newCount})`;
//     } else {
//       defaultName = `${data.label}(${newCount})`;
//     }

//     const newNode = {
//       id: `node-${nextId}`,
//       type: 'colorBox',
//       position,
//       data: {
//         label: data.label,
//         color: data.color,
//         imageUrl: data.imageUrl || '',
//         customName: defaultName
//       }
//     };

//     setNodes((nds) => nds.concat(newNode));
//     setNextId((id) => id + 1);
    
//     // Save to history after adding node
//     setTimeout(() => {
//       setNodes(currentNodes => {
//         saveToHistory(currentNodes, edges);
//         return currentNodes;
//       });
//     }, 100);
    
//   }, [nextId, blockCounts, setNodes, edges, reactFlowInstance, saveToHistory]);

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   // Node click handlers
//   const onNodeClick = useCallback((event, node) => {
//     setSelectedNode(node);
//     setShowSidebar(true);
//     event.stopPropagation();
//   }, []);

//   const onPaneClick = useCallback(() => {
//     setShowSidebar(false);
//     setSelectedNode(null);
//   }, []);

//   // Connect selected nodes
//   const connectSelectedNodes = useCallback(() => {
//     if (selectedNodes.length !== 2) return;

//     const [sourceNode, targetNode] = selectedNodes;
//     const sourceHandle = 'right-0';
//     const targetHandle = 'left-0';

//     const connectionParams = {
//       source: sourceNode.id,
//       target: targetNode.id,
//       sourceHandle,
//       targetHandle
//     };

//     if (!isValidConnection(connectionParams)) return;

//     const newEdge = {
//       id: `edge-${sourceNode.id}-${targetNode.id}`,
//       ...connectionParams,
//       type: 'smoothstep',
//       markerEnd: {
//         type: MarkerType.ArrowClosed
//       },
//       style: getEdgeStyle(sourceHandle, targetHandle)
//     };

//     setEdges((eds) => {
//       const edgeExists = eds.some(
//         edge =>
//           edge.source === sourceNode.id &&
//           edge.target === targetNode.id &&
//           edge.sourceHandle === sourceHandle &&
//           edge.targetHandle === targetHandle
//       );
//       if (!edgeExists) {
//         const updatedEdges = eds.concat(newEdge);
//         setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
//         return updatedEdges;
//       }
//       return eds;
//     });
//   }, [selectedNodes, setEdges, nodes, saveToHistory]);
//   // const isPortAlreadyConnected = useCallback((nodeId, handleId) => {
//   //   return edges.some(
//   //     edge =>
//   //       (edge.source === nodeId && edge.sourceHandle === handleId) ||
//   //       (edge.target === nodeId && edge.targetHandle === handleId)
//   //   );
//   // }, [edges]);
//   const isPortAlreadyConnected = useCallback((nodeId, handleId) => {
//     return edges.some(
//       edge =>
//         (edge.source === nodeId && edge.sourceHandle === handleId) ||
//         (edge.target === nodeId && edge.targetHandle === handleId)
//     );
//   }, [edges]);

//   // Function to show error indicator at a specific port
// const showErrorIndicator = (nodeId, portHandle) => {
//   // Find the port element in the DOM
//   const portElement = document.querySelector(`[data-nodeid="${nodeId}"] [data-handleid="${portHandle}"]`);
  
//   if (portElement) {
//     // Create a cross mark element
//     const crossMark = document.createElement('div');
//     crossMark.className = 'port-error-indicator';
//     crossMark.innerHTML = '❌'; // Cross mark symbol
    
//     // Style the cross mark
//     crossMark.style.position = 'absolute';
//     crossMark.style.fontSize = '14px';
//     crossMark.style.color = 'red';
//     crossMark.style.pointerEvents = 'none'; // Make it non-interactive
    
//     // Position the cross mark based on port side (left or right)
//     if (portHandle.startsWith('left')) {
//       crossMark.style.left = '-20px';
//       crossMark.style.top = '0';
//     } else {
//       crossMark.style.right = '-20px';
//       crossMark.style.top = '0';
//     }
    
//     // Add the cross mark to the port element
//     portElement.style.position = 'relative'; // Ensure port has relative positioning
//     portElement.appendChild(crossMark);
    
//     // Remove the cross mark after 2 seconds
//     setTimeout(() => {
//       if (crossMark.parentElement) {
//         crossMark.parentElement.removeChild(crossMark);
//       }
//     }, 2000);
//   }
// };

// // CSS styles to add to your stylesheet
// const errorIndicatorStyles = `
// .port-error-indicator {
//   animation: fadeInOut 2s ease-in-out;
//   z-index: 1000;
// }

// @keyframes fadeInOut {
//   0% { opacity: 0; }
//   20% { opacity: 1; }
//   80% { opacity: 1; }
//   100% { opacity: 0; }
// }
// `;


// // Add the styles to the document
// const addErrorIndicatorStyles = () => {
//   const styleElement = document.createElement('style');
//   styleElement.textContent = errorIndicatorStyles;
//   document.head.appendChild(styleElement);
// };

// // Call this function when your app initializes
// useEffect(() => {
//   addErrorIndicatorStyles();
// }, []);
  
//   const isValidConnection = useCallback((params) => {
//     const sourceNode = nodes.find(n => n.id === params.source);
//     const targetNode = nodes.find(n => n.id === params.target);
  
//     if (!sourceNode || !targetNode) return false;
  
//     // Prevent self-connection
//     if (params.source === params.target) {
//       setNotification('Invalid connection: You cannot connect a node to itself.');
//       return false;
//     }
  
//     const sourcePort = params.sourceHandle;
//     const targetPort = params.targetHandle;
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     // Check Image 1 port restriction (for both source and target)
//     // aarthi
//     if (sourceLabel === "D.PSOC4") {
//       const match = sourcePort.match(/(left|right)-(\d+)/);
//       if (match) {
//         const [, side, index] = match;
//         const oppositeSide = side === 'left' ? 'right' : 'left';
//         const oppositePort = `${oppositeSide}-${index}`;
        
//         if (isPortAlreadyConnected(params.source, oppositePort)) {
//           setNotification(`Invalid connection: Cannot connect from ${sourcePort} because ${oppositePort} is already connected.`);
//           return false;
//         }
//       }
//     }
//     // aarthi
//     if (targetLabel === "D.PSOC4") {
//       const match = targetPort.match(/(left|right)-(\d+)/);
//       if (match) {
//         const [, side, index] = match;
//         const oppositeSide = side === 'left' ? 'right' : 'left';
//         const oppositePort = `${oppositeSide}-${index}`;
        
//         if (isPortAlreadyConnected(params.target, oppositePort)) {
//           setNotification(`Invalid connection: Cannot connect to ${targetPort} because ${oppositePort} is already connected.`);
//           return false;
//         }
//       }
//     }
    
//     // Check port rules from source to target
//     const sourceRule = PORT_RULES[sourceLabel]?.[sourcePort];
//     if (sourceRule) {
//       const targetPortNumber = parseInt(targetPort.split('-')[1], 10);
      
//       // Rule: allow specific list
//       if (sourceRule.allow && !sourceRule.allow.includes(targetPortNumber)) {
//         setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) cannot connect to port ${targetPort}`);
//         return false;
//       }
      
//       // Rule: even-only
//       if (sourceRule.even && targetPortNumber % 2 !== 0) {
//         setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) requires even-numbered port.`);
//         return false;
//       }
      
//       // Rule: odd-only
//       if (sourceRule.odd && targetPortNumber % 2 !== 1) {
//         setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) requires odd-numbered port.`);
//         return false;
//       }
//     }
    
//     // Check port rules from target to source (important for bidirectional validation)
//     const targetRule = PORT_RULES[targetLabel]?.[targetPort];
//     if (targetRule) {
//       const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
      
//       // Rule: allow specific list
//       if (targetRule.allow && !targetRule.allow.includes(sourcePortNumber)) {
//         setNotification(`Invalid connection: ${targetLabel}(${targetPort}) cannot connect to port ${sourcePort}`);
//         return false;
//       }
      
//       // Rule: even-only
//       if (targetRule.even && sourcePortNumber % 2 !== 0) {
//         setNotification(`Invalid connection: ${targetLabel}(${targetPort}) requires even-numbered port.`);
//         return false;
//       }
      
//       // Rule: odd-only
//       if (targetRule.odd && sourcePortNumber % 2 !== 1) {
//         setNotification(`Invalid connection: ${targetLabel}(${targetPort}) requires odd-numbered port.`);
//         return false;
//       }
//     }
  
//     return true;
//   }, [nodes, isPortAlreadyConnected]);
//   // Edge style based on connection
//   // const getEdgeStyle = useCallback((sourceHandle, targetHandle) => {
//   //   const isTopToTop =
//   //     sourceHandle && targetHandle &&
//   //     sourceHandle.startsWith('top-') &&
//   //     targetHandle.startsWith('top-');

//   //   return {
//   //     stroke: '#666',
//   //     strokeWidth: 2,
//   //     fill: 'none',
//   //     strokeDasharray: isTopToTop ? '5, 5' : undefined,
//   //   };
//   // }, []);
//   const getEdgeStyle = useCallback((sourceHandle, targetHandle, isValid = true) => {
//     return {
//       stroke: isValid ? '#666' : '#ef4444',
//       strokeWidth: 2,
//       fill: 'none',
//       strokeDasharray: isValid ? undefined : '5,5'
//     };
//   }, []);
//   // Undo handler
//   const handleUndo = useCallback(() => {
//     if (historyIndex > 0) {
//       setIsHistoryAction(true);
//       const newIndex = historyIndex - 1;
//       const previousState = history[newIndex];
//       setNodes(previousState.nodes);
//       setEdges(previousState.edges);
//       setHistoryIndex(newIndex);
//     }
//   }, [history, historyIndex]);

//   // Redo handler
//   const handleRedo = useCallback(() => {
//     if (historyIndex < history.length - 1) {
//       setIsHistoryAction(true);
//       const newIndex = historyIndex + 1;
//       const nextState = history[newIndex];
//       setNodes(nextState.nodes);
//       setEdges(nextState.edges);
//       setHistoryIndex(newIndex);
//     }
//   }, [history, historyIndex]);

//   // Update I2C address map
//   const updateI2CAddress = useCallback((address, componentName, deviceId) => {
//     setI2cAddresses((prev) => ({
//       ...prev,
//       [address]: { componentName, deviceId }
//     }));
//   }, []);
  
//   // Handle selection changes - memoized to prevent re-renders
//   const onSelectionChange = useCallback(({ nodes, edges }) => {
//     setSelectedNodes(nodes || []);
//     setSelectedEdges(edges || []);
//   }, []);

//   // Update node name
//   const updateNodeName = useCallback((nodeId, newName) => {
//     setNodes((nds) => {
//       const updatedNodes = nds.map((node) =>
//         node.id === nodeId
//           ? {
//               ...node,
//               data: {
//                 ...node.data,
//                 customName: newName
//               }
//             }
//           : node
//       );
//       setTimeout(() => saveToHistory(updatedNodes, edges), 0);
//       return updatedNodes;
//     });
//   }, [setNodes, edges, saveToHistory]);

//   // Remove selected nodes or edges
//   const removeSelection = useCallback(() => {
//     if (selectedNodes.length > 0 || selectedEdges.length > 0) {
//       const nodesToRemove = new Set(selectedNodes.map(n => n.id));
      
//       setNodes((nds) => {
//         const updatedNodes = nds.filter(node => !nodesToRemove.has(node.id));
//         setEdges((eds) => {
//           const updatedEdges = eds.filter(edge =>
//             !nodesToRemove.has(edge.source) &&
//             !nodesToRemove.has(edge.target) &&
//             !selectedEdges.some(e => e.id === edge.id)
//           );
//           setTimeout(() => saveToHistory(updatedNodes, updatedEdges), 0);
//           return updatedEdges;
//         });
//         return updatedNodes;
//       });

//       if (selectedNode && nodesToRemove.has(selectedNode.id)) {
//         setShowSidebar(false);
//         setSelectedNode(null);
//       }
//     }
//   }, [selectedNodes, selectedEdges, selectedNode, saveToHistory]);

//   // Handle connect edges
//   // const onConnect = useCallback((params) => {
//   //   if (!isValidConnection(params)) return;
    
//   //   setEdges((eds) => {
//   //     const updatedEdges = addEdge({
//   //       ...params,
//   //       type: 'smoothstep',
//   //       markerEnd: {
//   //         type: MarkerType.ArrowClosed
//   //       },
//   //       style: getEdgeStyle(params.sourceHandle, params.targetHandle)
//   //     }, eds);
      
//   //     setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
//   //     return updatedEdges;
//   //   });
//   // }, [isValidConnection, getEdgeStyle, nodes, saveToHistory]);
//   const onConnect = useCallback((params) => {
//     const isValid = isValidConnection(params);
//     if (!isValid) return;
  
//     const newEdge = {
//       id: `edge-${params.source}-${params.target}`,
//       ...params,
//       type: 'smoothstep',
//       markerEnd: {
//         type: MarkerType.ArrowClosed
//       },
//       style: getEdgeStyle(params.sourceHandle, params.targetHandle, true)
//     };
  
//     setEdges((eds) => addEdge(newEdge, eds));
//   }, [isValidConnection, getEdgeStyle]);

//   // Initialize history
//   useEffect(() => {
//     if (history.length === 0) {
//       saveToHistory([], []);
//     }
//   }, [history.length, saveToHistory]);

//   // Handle File actions
//   const handleCreateNewFile = () => {
//     setShowCreateFileDialog(true);
//   };

//   const handleSaveNewFile = (fileName) => {
//     setNodes([]);
//     setEdges([]);
//     setNextId(1);
//     setBlockCounts({
//       'D.PSOC4': 0,
//       'Image 2': 0,
//       'Image 3': 0,
//       'Image 4': 0,
//       'Image 5': 0,
//       'Image 6': 0
//     });
//     setCurrentFileName(fileName);
//     setHistory([{ nodes: [], edges: [] }]);
//     setHistoryIndex(0);
//     setNotification(`New file "${fileName}" created`);
//     setShowCreateFileDialog(false);
    
//     // Save the empty file
//     saveFile(fileName);
//   };

//   const handleOpenFile = (fileName) => {
//     try {
//       // Use user-specific key to load file data
//       const fileData = localStorage.getItem(`file_${userId}_${fileName}`);
//       if (fileData) {
//         const parsedData = JSON.parse(fileData);
        
//         // Reset ReactFlow if needed
//         if (reactFlowInstance) {
//           reactFlowInstance.fitView();
//         }
        
//         // Set the data
//         const loadedNodes = parsedData.nodes || [];
//         const loadedEdges = parsedData.edges || [];
        
//         // Update nextId based on loaded nodes
//         const newNextId = calculateNextIdFromNodes(loadedNodes);
//         setNextId(newNextId);
        
//         // Set nodes and edges
//         setNodes(loadedNodes);
//         setEdges(loadedEdges);
        
//         // Set other related data
//         setBlockCounts(parsedData.blockCounts || {
//           'D.PSOC4': 0,
//           'Image 2': 0,
//           'Image 3': 0,
//           'Image 4': 0,
//           'Image 5': 0,
//           'Image 6': 0
//         });
//         setI2cAddresses(parsedData.i2cAddresses || {});
        
//         // Update history for undo/redo
//         setHistory([{ nodes: loadedNodes, edges: loadedEdges }]);
//         setHistoryIndex(0);
        
//         setCurrentFileName(fileName);
//         setNotification(`File "${fileName}" opened successfully`);
        
//         // Add a short delay to allow ReactFlow to properly render nodes
//         setTimeout(() => {
//           if (reactFlowInstance) {
//             reactFlowInstance.fitView();
//           }
//         }, 300);
//       }
//     } catch (error) {
//       console.error('Error opening file:', error);
//       setNotification('Error opening file');
//     }
//     setShowFileListDialog(false);
//   };

//   const handleDeleteFile = (fileName) => {
//     try {
//       // Remove file from localStorage
//       localStorage.removeItem(`file_${userId}_${fileName}`);
      
//       // Update savedFiles list
//       const updatedFiles = savedFiles.filter(file => file !== fileName);
//       setSavedFiles(updatedFiles);
//       localStorage.setItem(`savedFiles_${userId}`, JSON.stringify(updatedFiles));
      
//       // If the deleted file was the current one, clear the current file
//       if (currentFileName === fileName) {
//         handleCreateNewFile();
//       }
      
//       setNotification(`File "${fileName}" deleted successfully`);
//     } catch (error) {
//       console.error('Error deleting file:', error);
//       setNotification('Error deleting file');
//     }
//   };

//   const saveCurrentBlockCountsState = useCallback(() => {
//     // Calculate actual block counts from nodes
//     const actualCounts = {
//       'D.PSOC4': 0,
//       'Image 2': 0,
//       'Image 3': 0,
//       'Image 4': 0,
//       'Image 5': 0,
//       'Image 6': 0
//     };
    
//     nodes.forEach(node => {
//       if (node.data && node.data.label) {
//         if (actualCounts[node.data.label] !== undefined) {
//           actualCounts[node.data.label]++;
//         }
//       }
//     });
    
//     return actualCounts;
//   }, [nodes]);

//   const saveFile = useCallback((fileName) => {
//     try {
//       // Save current accurate blockCounts based on actual nodes
//       const currentBlockCounts = saveCurrentBlockCountsState();
      
//       const fileData = {
//         nodes,
//         edges,
//         blockCounts: currentBlockCounts,
//         i2cAddresses,
//         createdBy: userId,
//         createdAt: new Date().toISOString(),
//         lastModified: new Date().toISOString()
//       };
      
//       // Save file with user-specific key
//       localStorage.setItem(`file_${userId}_${fileName}`, JSON.stringify(fileData));
      
//       // Update saved files list if this is a new file
//       if (!savedFiles.includes(fileName)) {
//         const updatedFiles = [...savedFiles, fileName];
//         setSavedFiles(updatedFiles);
//         // Store the user's file list separately with user-specific key
//         localStorage.setItem(`savedFiles_${userId}`, JSON.stringify(updatedFiles));
//       }
      
//       setCurrentFileName(fileName);
//       setNotification(`File "${fileName}" saved successfully`);
//     } catch (error) {
//       console.error('Error saving file:', error);
//       setNotification('Error saving file');
//     }
//   }, [nodes, edges, i2cAddresses, userId, savedFiles, saveCurrentBlockCountsState]);

//   const handleSaveFile = () => {
//     if (currentFileName) {
//       // Save to existing file
//       saveFile(currentFileName);
//     } else {
//       // Open create file dialog if no filename exists
//       setShowCreateFileDialog(true);
//     }
//   };

//   return (
//     <div className="app-container" style={{
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100vh',
//       position: 'relative'
//     }}>
//       {/* Notification */}
//       {notification && (
//         <Notification message={notification} onClose={() => setNotification(null)} />
//       )}

//       {/* Top Toolbar with File/Open buttons */}
//       <div className="toolbar" style={{ 
//         backgroundColor: '#e5e7eb', 
//         padding: '8px', 
//         display: 'flex', 
//         gap: '8px', 
//         height: '30px',
//         justifyContent: 'space-between'
//       }}>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <button 
//             onClick={handleCreateNewFile}
//             style={{ 
//               padding: '2px 8px', 
//               backgroundColor: 'transparent',
//               border: '1px solid #9ca3af',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px'
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//               <polyline points="14 2 14 8 20 8"></polyline>
//               <line x1="12" y1="18" x2="12" y2="12"></line>
//               <line x1="9" y1="15" x2="15" y2="15"></line>
//             </svg>
//             New
//           </button>
//           <button 
//             onClick={() => setShowFileListDialog(true)}
//             style={{ 
//               padding: '2px 8px', 
//               backgroundColor: 'transparent',
//               border: '1px solid #9ca3af',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px'
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//             </svg>
//             Open
//           </button>
//           <button 
//             onClick={handleSaveFile}
//             style={{ 
//               padding: '2px 8px', 
//               backgroundColor: 'transparent',
//               border: '1px solid #9ca3af',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px'
//             }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
//               <polyline points="17 21 17 13 7 13 7 21"></polyline>
//               <polyline points="7 3 7 8 15 8"></polyline>
//             </svg>
//             Save
//           </button>
//           {currentFileName && (
//             <span style={{ alignSelf: 'center', marginLeft: '8px', color: '#4b5563', fontSize: '0.9rem' }}>
//               {currentFileName}
//             </span>
//           )}
//         </div>
//         <SignOut />
//       </div>

//       <div style={{ display: 'flex', flex: 1 }}>
//         {/* Left Sidebar with draggable items */}
//         <SidebarBoxes onDragStart={onDragStart} />

//         {/* Main Canvas */}
//         <div className="main-content" style={{ flex: '1', position: 'relative' }}>
//           {/* Toolbar with actions */}
//           <Toolbar
//             selectedNodes={selectedNodes}
//             selectedEdges={selectedEdges}
//             connectSelectedNodes={connectSelectedNodes}
//             removeSelection={removeSelection}
//             handleUndo={handleUndo}
//             handleRedo={handleRedo}
//             historyIndex={historyIndex}
//             historyLength={history.length}
//             setShowI2CModal={setShowI2CModal}
//             toggleSplitPane={toggleSplitPane}
//             showSplitPane={showSplitPane}
//           />
          


// {showSplitPane ? (
//     <div style={{ height: 'calc(100% - 40px)' }}>
//       <SplitPane
//         split="vertical"
//         defaultSize="50%"
//           resizerClassName="custom-resizer"
//           size={paneSize}
//   onChange={(newSize) => setPaneSize(newSize)}
//         style={{ position: 'relative' }}
//       >
//         {/* Left side - Flow canvas */}
//         <div ref={reactFlowWrapper} style={{ height: '100%' }}>
//           <ReactFlowProvider>
//             <ReactFlow
//               nodes={nodes}
//               edges={edges}
//               onNodesChange={handleNodesChange}
//               onEdgesChange={handleEdgesChange}
//               onConnect={onConnect}
//               nodeTypes={nodeTypes}
//               onInit={setReactFlowInstance}
//               onDrop={onDrop}
//               onDragOver={onDragOver}
//               onSelectionChange={onSelectionChange}
//               onNodeClick={onNodeClick}
//               onPaneClick={onPaneClick}
//               connectionLineType={ConnectionLineType.SmoothStep}
//               defaultEdgeOptions={{
//                 type: 'smoothstep',
//                 style: customEdgeStyles,
//                 markerEnd: {
//                   type: MarkerType.ArrowClosed
//                 }
//               }}
//               fitView
//               zoomOnScroll={false}
//               panOnScroll
//               panOnScrollMode="free"
//               zoomOnDoubleClick={false}
//               deleteKeyCode={['Backspace', 'Delete']}
//               multiSelectionKeyCode={['Control', 'Meta']}
//             >
//               <Background color="#999" gap={16} />
//               <Controls />
//               <MiniMap />
//             </ReactFlow>
//           </ReactFlowProvider>
//         </div>
                
//         {/* Right side - Configuration panel */}
//         <div style={{ height: '100%', overflow: 'auto', padding: '15px', backgroundColor: '#f9fafb' }}>
//           <h3>Stack Configuratio</h3>
//           <div>
//             {/* <p>hi</p> */}
//             {/* <BoardConfigPanel 
//             // nodes={nodes} onNodeOrderChange={handleNodeOrderChange} 
//             nodes={boardOrder.length > 0
//               ? boardOrder.map(id => nodes.find(n => n.id === id))
//               : nodes
//             }
//             onNodeOrderChange={handleNodeOrderChange}


//             /> */}
//             <BoardConfigPanel 
//   nodes={boardOrder.length > 0
//     ? boardOrder.map(id => nodes.find(n => n.id === id)).filter(Boolean)
//     : nodes
//   }
//   edges={edges}
//   PORT_RULES={PORT_RULES}
//   onNodeOrderChange={handleNodeOrderChange}
// />
// {/* <BoardConfigPanel 
//   nodes={boardOrder.length > 0
//     ? boardOrder.map(id => nodes.find(n => n.id === id))
//     : nodes
//   }
//   edges={edges}
//   PORT_RULES={PORT_RULES}
// />     */}
//         {/* You can add your configuration components here */}
//           </div>
//         </div>
//       </SplitPane>
//     </div>
//   ) : (
//     <div ref={reactFlowWrapper} style={{ height: 'calc(100% - 40px)' }}>
//       <ReactFlowProvider>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={handleNodesChange}
//           onEdgesChange={handleEdgesChange}
//           onConnect={onConnect}
//           nodeTypes={nodeTypes}
//           onInit={setReactFlowInstance}
//           onDrop={onDrop}
//           onDragOver={onDragOver}
//           onSelectionChange={onSelectionChange}
//           onNodeClick={onNodeClick}
//           onPaneClick={onPaneClick}
//           connectionLineType={ConnectionLineType.SmoothStep}
//           defaultEdgeOptions={{
//             type: 'smoothstep',
//             style: customEdgeStyles,
//             markerEnd: {
//               type: MarkerType.ArrowClosed
//             }
//           }}
//           fitView
//           zoomOnScroll={false}
//           panOnScroll
//           panOnScrollMode="free"
//           zoomOnDoubleClick={false}
//           deleteKeyCode={['Backspace', 'Delete']}
//           multiSelectionKeyCode={['Control', 'Meta']}
//         >
//           <Background color="#999" gap={16} />
//           <Controls />
//           <MiniMap />
//         </ReactFlow>
//       </ReactFlowProvider>
//     </div>)}

//           {/* Node Properties Sidebar */}
//           {showSidebar && selectedNode && (
//             <NodePropertiesSidebar
//               node={selectedNode}
//               onClose={() => setShowSidebar(false)}
//               onUpdateNodeName={updateNodeName}
//               onUpdateI2CAddress={updateI2CAddress}
//               i2cAddresses={i2cAddresses}
//               setNodes={setNodes}
              

//             />
//           )}
//         </div>
//       </div>

//       {/* I2C Address Modal */}
//       {showI2CModal && (
//         <I2CAddressModal
//           onClose={() => setShowI2CModal(false)}
//           i2cAddresses={i2cAddresses}
//         />
//       )}

//       {/* Create File Dialog */}
//       {showCreateFileDialog && (
//         <CreateFileDialog
//           onSave={handleSaveNewFile}
//           onCancel={() => setShowCreateFileDialog(false)}
//         />
//       )}

//       {/* File List Dialog */}
//       {showFileListDialog && (
//         <FileListDialog
//           files={savedFiles}
//           onOpen={handleOpenFile}
//           onDelete={handleDeleteFile}
//           onClose={() => setShowFileListDialog(false)}
//         />
//       )}
//     </div>
//   );
// }





















import React, { useState, useCallback, useRef, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import BoardConfigPanel from './BoardConfigPanel';
// import  { Background, Controls, MiniMap } from 'react-flow-renderer';

import { useAuth } from './auth-context';
import { Navigate } from 'react-router-dom';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  ConnectionLineType
} from 'reactflow';

// Import custom components
import ColorBoxNode from './ColorBoxNode';
import Notification from './Notification';
import I2CAddressModal from './I2CAddressModal';
import NodePropertiesSidebar from './NodePropertiesSidebar';
import Toolbar from './Toolbar';
import SidebarBoxes from './SidebarBoxes';
import SignOut from './SignOut';
import CreateFileDialog from './CreateFileDialog';
import FileListDialog from './FileListDialog';
// Import CSS
import 'reactflow/dist/style.css';

// Define node types
const nodeTypes = {
  colorBox: ColorBoxNode
};

// Default edge style
const customEdgeStyles = {
  stroke: '#666',
  strokeWidth: 2,
  fill: 'none'
};

export default function ImageConnector() {
  const [selectedEdgeForConfig, setSelectedEdgeForConfig] = useState(null);
  const [connections, setConnections] = useState({});
  const [boardOrder, setBoardOrder] = useState([]);

  const toggleSplitPane = useCallback(() => {
    setShowSplitPane(prev => !prev);
  }, []);
  const [showSplitPane, setShowSplitPane] = useState(false);
  const [paneSize, setPaneSize] = useState("50%");
  // Add this inside ImageConnector component
  const PORT_RULES = {
    'Image 2': {
      'left-0': { allow: [0,2, 4,6,8,10,12,14,16 ] },
      'right-0': { allow: [0,2, 4,6,8,10,12,14,16 ] },
      'left-1': {allow: [1, 3,5,7,9,11,13,15 ] },
      'right-1': {allow: [1, 3,5,7,9,11,13,15 ]  }
    },
    'Image 5': {
      'right-0': { allow: [0,8 ] },
      'right-1': { allow: [1,9 ] },
      'right-2': { allow: [2,10 ] },
      'right-3': { allow: [3,11] },
      'right-4': { allow: [4,12] },
      'right-5': { allow: [5,13] },
      'right-6': { allow: [6,14] },
      'right-7': { allow: [7,15] },
      'left-0': { allow: [0,8 ] },
      'left-1': { allow: [1,9 ] },
      'left-2': { allow: [2,10 ] },
      'left-3': { allow: [3,11] },
      'left-4': { allow: [4,12] },
      'left-5': { allow: [5,13] },
      'left-6': { allow: [6,14] },
      'left-7': { allow: [7,15] },
    },
    'Image 4': {
      'right-0': { allow: [0,2,4,6,8,10,12,14] },
      'right-1': { allow: [1,3,5,7,9,11,13,15] },
      'left-0': { allow: [0,4,8,12 ] },
      'left-1': { allow: [1,5,9,13] },
      'left-2': { allow: [2,6,10,14 ] },
      'left-3': { allow: [3,7,11,15] },
    },

    'Image 6': {
      'right-0': { allow: [0,8 ] },
      'right-1': { allow: [1,9 ] },
      'right-2': { allow: [2,10 ] },
      'right-3': { allow: [3,11] },
      'right-4': { allow: [4,12] },
      'right-5': { allow: [5,13] },
      'right-6': { allow: [6,14] },
      'right-7': { allow: [7,15] },
    },

    'Image 3': {
      'left-0': { allow: [0,2, 4,6,8,10,12,14,16 ]},
      'left-1': { allow: [1, 3,5,7,9,11,13,15]},
      'right-0': { allow: [0,2, 4,6,8,10,12,14,16 ]},
      'right-1': { allow: [1, 3,5,7,9,11,13,15 ]}
    }
  };  
  

  // Make sure we have the user object early in the component
  const { user, loading } = useAuth();
  const userId = user?.uid || user?.id || 'anonymous'; // Use 'anonymous' as fallback if uid/id is not available
  
  if (loading) return <div>Loading...</div>;
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Node and Edge Management
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nextId, setNextId] = useState(1);
  const [blockCounts, setBlockCounts] = useState({
    // aarthi
    'D.PSOC4': 0,
    'Image 2': 0,
    'Image 3': 0,
    'Image 4': 0,
    'Image 5': 0,
    'Image 6': 0
  });

  // Selection and UI states
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);
  const [notification, setNotification] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showI2CModal, setShowI2CModal] = useState(false);
  
  // File dialogs states
  const [showCreateFileDialog, setShowCreateFileDialog] = useState(false);
  const [showFileListDialog, setShowFileListDialog] = useState(false);
  const [savedFiles, setSavedFiles] = useState([]);
  const [currentFileName, setCurrentFileName] = useState(null);

  // History management for undo/redo
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isHistoryAction, setIsHistoryAction] = useState(false);

  // I2C Address state
  const [i2cAddresses, setI2cAddresses] = useState({});

  // Ref for ReactFlow instance
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Load saved files from localStorage for the current user
  useEffect(() => {
    if (user) {
      try {
        // Use the user-specific key to load files
        const userSpecificKey = `savedFiles_${userId}`;
        const storedFiles = localStorage.getItem(userSpecificKey);
        if (storedFiles) {
          setSavedFiles(JSON.parse(storedFiles));
        } else {
          // Initialize empty array if no files exist for this user
          setSavedFiles([]);
        }
      } catch (error) {
        console.error('Error loading saved files:', error);
        setSavedFiles([]);
      }
    }
  }, [userId, user]);

  // Calculate highest node ID when loading files
  const calculateNextIdFromNodes = (loadedNodes) => {
    if (!loadedNodes || loadedNodes.length === 0) return 1;
    
    let highestId = 0;
    loadedNodes.forEach(node => {
      const idStr = node.id.replace('node-', '');
      const idNum = parseInt(idStr, 10);
      if (!isNaN(idNum) && idNum > highestId) {
        highestId = idNum;
      }
    });
    
    return highestId + 1;
  };

  // Save state to history (for undo/redo)
  const saveToHistory = useCallback((currentNodes, currentEdges) => {
    if (isHistoryAction) {
      setIsHistoryAction(false);
      return;
    }

    const currentState = {
      nodes: JSON.parse(JSON.stringify(currentNodes)),
      edges: JSON.parse(JSON.stringify(currentEdges))
    };

    const newHistory = history.slice(0, historyIndex + 1);
    setHistory([...newHistory, currentState]);
    setHistoryIndex(newHistory.length);
  }, [history, historyIndex, isHistoryAction]);

  // Handle node and edge changes and update history
  const handleNodesChange = useCallback((changes) => {
    onNodesChange(changes);
    setNodes((nds) => {
      const updatedNodes = [...nds];
      setTimeout(() => saveToHistory(updatedNodes, edges), 0);
      return updatedNodes;
    });
  }, [onNodesChange, edges, saveToHistory]);

  const handleNodeOrderChange = useCallback((reorderedNodes) => {
    // Update the node positions based on the new order
    const updatedNodes = reorderedNodes.map((node, index) => ({
      ...node,
      position: { x: node.position.x, y: index * 100 }, // Adjust Y position based on index
    }));

    // Update the nodes state in React Flow
    setNodes(updatedNodes);

    // Optionally, save this change to history
    saveToHistory(updatedNodes, edges);
    setBoardOrder(orderedNodeIds);
  }, [setNodes, edges, saveToHistory,setBoardOrder]);

  const handleEdgesChange = useCallback((changes) => {
    onEdgesChange(changes);
    setEdges((eds) => {
      const updatedEdges = [...eds];
      setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
      return updatedEdges;
    });
  }, [onEdgesChange, nodes, saveToHistory]);

  // Drag & Drop logic
  const onDragStart = useCallback((event, box) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(box));
    event.dataTransfer.effectAllowed = 'move';
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    if (!reactFlowInstance) return;

    const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY
    });

    const newCount = blockCounts[data.label] + 1;
    setBlockCounts((prev) => ({
      ...prev,
      [data.label]: newCount
    }));

    let defaultName;
    // aarthi
    if (data.label === 'D.PSOC4') {
      defaultName = `D.PSOC4(${newCount})`;
    } else if (data.label === 'Image 2') {
      defaultName = `I.VGA(${newCount})`;
    } else if (data.label === 'Image 3') {
      defaultName = `I.TIA(${newCount})`;
    } else if (data.label === 'Image 4') {
      defaultName = `I.VIA(${newCount})`;
    } else if (data.label === 'Image 5') {
      defaultName = `I.NIA(${newCount})`;
    }
    else if (data.label === 'Image 6') {
      defaultName = `I.GIM(${newCount})`;
    } else {
      defaultName = `${data.label}(${newCount})`;
    }

    const newNode = {
      id: `node-${nextId}`,
      type: 'colorBox',
      position,
      data: {
        label: data.label,
        color: data.color,
        imageUrl: data.imageUrl || '',
        customName: defaultName
      }
    };

    setNodes((nds) => nds.concat(newNode));
    setNextId((id) => id + 1);
    
    // Save to history after adding node
    setTimeout(() => {
      setNodes(currentNodes => {
        saveToHistory(currentNodes, edges);
        return currentNodes;
      });
    }, 100);
    
  }, [nextId, blockCounts, setNodes, edges, reactFlowInstance, saveToHistory]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Node click handlers
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setShowSidebar(true);
    event.stopPropagation();
  }, []);

  const onPaneClick = useCallback(() => {
  setShowSidebar(false);
  setSelectedNode(null);
  setSelectedEdgeForConfig(null); // Add this line
}, []);
const onEdgeClick = useCallback((event, edge) => {
  setSelectedEdgeForConfig(edge);
  event.stopPropagation();
}, []);

  // Connect selected nodes
  const connectSelectedNodes = useCallback(() => {
    if (selectedNodes.length !== 2) return;

    const [sourceNode, targetNode] = selectedNodes;
    const sourceHandle = 'right-0';
    const targetHandle = 'left-0';

    const connectionParams = {
      source: sourceNode.id,
      target: targetNode.id,
      sourceHandle,
      targetHandle
    };

    if (!isValidConnection(connectionParams)) return;

    const newEdge = {
      id: `edge-${sourceNode.id}-${targetNode.id}`,
      ...connectionParams,
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.ArrowClosed
      },
      style: getEdgeStyle(sourceHandle, targetHandle)
    };

    setEdges((eds) => {
      const edgeExists = eds.some(
        edge =>
          edge.source === sourceNode.id &&
          edge.target === targetNode.id &&
          edge.sourceHandle === sourceHandle &&
          edge.targetHandle === targetHandle
      );
      if (!edgeExists) {
        const updatedEdges = eds.concat(newEdge);
        setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
        return updatedEdges;
      }
      return eds;
    });
  }, [selectedNodes, setEdges, nodes, saveToHistory]);
  // const isPortAlreadyConnected = useCallback((nodeId, handleId) => {
  //   return edges.some(
  //     edge =>
  //       (edge.source === nodeId && edge.sourceHandle === handleId) ||
  //       (edge.target === nodeId && edge.targetHandle === handleId)
  //   );
  // }, [edges]);
  const isPortAlreadyConnected = useCallback((nodeId, handleId) => {
    return edges.some(
      edge =>
        (edge.source === nodeId && edge.sourceHandle === handleId) ||
        (edge.target === nodeId && edge.targetHandle === handleId)
    );
  }, [edges]);

  // Function to show error indicator at a specific port
const showErrorIndicator = (nodeId, portHandle) => {
  // Find the port element in the DOM
  const portElement = document.querySelector(`[data-nodeid="${nodeId}"] [data-handleid="${portHandle}"]`);
  
  if (portElement) {
    // Create a cross mark element
    const crossMark = document.createElement('div');
    crossMark.className = 'port-error-indicator';
    crossMark.innerHTML = '❌'; // Cross mark symbol
    
    // Style the cross mark
    crossMark.style.position = 'absolute';
    crossMark.style.fontSize = '14px';
    crossMark.style.color = 'red';
    crossMark.style.pointerEvents = 'none'; // Make it non-interactive
    
    // Position the cross mark based on port side (left or right)
    if (portHandle.startsWith('left')) {
      crossMark.style.left = '-20px';
      crossMark.style.top = '0';
    } else {
      crossMark.style.right = '-20px';
      crossMark.style.top = '0';
    }
    
    // Add the cross mark to the port element
    portElement.style.position = 'relative'; // Ensure port has relative positioning
    portElement.appendChild(crossMark);
    
    // Remove the cross mark after 2 seconds
    setTimeout(() => {
      if (crossMark.parentElement) {
        crossMark.parentElement.removeChild(crossMark);
      }
    }, 2000);
  }
};

// CSS styles to add to your stylesheet
const errorIndicatorStyles = `
.port-error-indicator {
  animation: fadeInOut 2s ease-in-out;
  z-index: 1000;
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}
`;


// Add the styles to the document
const addErrorIndicatorStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = errorIndicatorStyles;
  document.head.appendChild(styleElement);
};

// Call this function when your app initializes
useEffect(() => {
  addErrorIndicatorStyles();
}, []);
  
  const isValidConnection = useCallback((params) => {
    const sourceNode = nodes.find(n => n.id === params.source);
    const targetNode = nodes.find(n => n.id === params.target);
  
    if (!sourceNode || !targetNode) return false;
  
    // Prevent self-connection
    if (params.source === params.target) {
      setNotification('Invalid connection: You cannot connect a node to itself.');
      return false;
    }
  
    const sourcePort = params.sourceHandle;
    const targetPort = params.targetHandle;
    const sourceLabel = sourceNode.data.label;
    const targetLabel = targetNode.data.label;
    
    // Check Image 1 port restriction (for both source and target)
    // aarthi
    if (sourceLabel === "D.PSOC4") {
      const match = sourcePort.match(/(left|right)-(\d+)/);
      if (match) {
        const [, side, index] = match;
        const oppositeSide = side === 'left' ? 'right' : 'left';
        const oppositePort = `${oppositeSide}-${index}`;
        
        if (isPortAlreadyConnected(params.source, oppositePort)) {
          setNotification(`Invalid connection: Cannot connect from ${sourcePort} because ${oppositePort} is already connected.`);
          return false;
        }
      }
    }
    // aarthi
    if (targetLabel === "D.PSOC4") {
      const match = targetPort.match(/(left|right)-(\d+)/);
      if (match) {
        const [, side, index] = match;
        const oppositeSide = side === 'left' ? 'right' : 'left';
        const oppositePort = `${oppositeSide}-${index}`;
        
        if (isPortAlreadyConnected(params.target, oppositePort)) {
          setNotification(`Invalid connection: Cannot connect to ${targetPort} because ${oppositePort} is already connected.`);
          return false;
        }
      }
    }
    
    // Check port rules from source to target
    const sourceRule = PORT_RULES[sourceLabel]?.[sourcePort];
    if (sourceRule) {
      const targetPortNumber = parseInt(targetPort.split('-')[1], 10);
      
      // Rule: allow specific list
      if (sourceRule.allow && !sourceRule.allow.includes(targetPortNumber)) {
        setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) cannot connect to port ${targetPort}`);
        return false;
      }
      
      // Rule: even-only
      if (sourceRule.even && targetPortNumber % 2 !== 0) {
        setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) requires even-numbered port.`);
        return false;
      }
      
      // Rule: odd-only
      if (sourceRule.odd && targetPortNumber % 2 !== 1) {
        setNotification(`Invalid connection: ${sourceLabel}(${sourcePort}) requires odd-numbered port.`);
        return false;
      }
    }
    
    // Check port rules from target to source (important for bidirectional validation)
    const targetRule = PORT_RULES[targetLabel]?.[targetPort];
    if (targetRule) {
      const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
      
      // Rule: allow specific list
      if (targetRule.allow && !targetRule.allow.includes(sourcePortNumber)) {
        setNotification(`Invalid connection: ${targetLabel}(${targetPort}) cannot connect to port ${sourcePort}`);
        return false;
      }
      
      // Rule: even-only
      if (targetRule.even && sourcePortNumber % 2 !== 0) {
        setNotification(`Invalid connection: ${targetLabel}(${targetPort}) requires even-numbered port.`);
        return false;
      }
      
      // Rule: odd-only
      if (targetRule.odd && sourcePortNumber % 2 !== 1) {
        setNotification(`Invalid connection: ${targetLabel}(${targetPort}) requires odd-numbered port.`);
        return false;
      }
    }
  
    return true;
  }, [nodes, isPortAlreadyConnected]);
  // Edge style based on connection
  // const getEdgeStyle = useCallback((sourceHandle, targetHandle) => {
  //   const isTopToTop =
  //     sourceHandle && targetHandle &&
  //     sourceHandle.startsWith('top-') &&
  //     targetHandle.startsWith('top-');

  //   return {
  //     stroke: '#666',
  //     strokeWidth: 2,
  //     fill: 'none',
  //     strokeDasharray: isTopToTop ? '5, 5' : undefined,
  //   };
  // }, []);
  const getEdgeStyle = useCallback((sourceHandle, targetHandle, isValid = true) => {
    return {
      stroke: isValid ? '#666' : '#ef4444',
      strokeWidth: 2,
      fill: 'none',
      strokeDasharray: isValid ? undefined : '5,5'
    };
  }, []);
  // Undo handler
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      setIsHistoryAction(true);
      const newIndex = historyIndex - 1;
      const previousState = history[newIndex];
      setNodes(previousState.nodes);
      setEdges(previousState.edges);
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  // Redo handler
  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setIsHistoryAction(true);
      const newIndex = historyIndex + 1;
      const nextState = history[newIndex];
      setNodes(nextState.nodes);
      setEdges(nextState.edges);
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  // Update I2C address map
  const updateI2CAddress = useCallback((address, componentName, deviceId) => {
    setI2cAddresses((prev) => ({
      ...prev,
      [address]: { componentName, deviceId }
    }));
  }, []);
  
  // Handle selection changes - memoized to prevent re-renders
  const onSelectionChange = useCallback(({ nodes, edges }) => {
    setSelectedNodes(nodes || []);
    setSelectedEdges(edges || []);
  }, []);

  // Update node name
  const updateNodeName = useCallback((nodeId, newName) => {
    setNodes((nds) => {
      const updatedNodes = nds.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                customName: newName
              }
            }
          : node
      );
      setTimeout(() => saveToHistory(updatedNodes, edges), 0);
      return updatedNodes;
    });
  }, [setNodes, edges, saveToHistory]);

  // Remove selected nodes or edges
  const removeSelection = useCallback(() => {
    if (selectedNodes.length > 0 || selectedEdges.length > 0) {
      const nodesToRemove = new Set(selectedNodes.map(n => n.id));
      
      setNodes((nds) => {
        const updatedNodes = nds.filter(node => !nodesToRemove.has(node.id));
        setEdges((eds) => {
          const updatedEdges = eds.filter(edge =>
            !nodesToRemove.has(edge.source) &&
            !nodesToRemove.has(edge.target) &&
            !selectedEdges.some(e => e.id === edge.id)
          );
          setTimeout(() => saveToHistory(updatedNodes, updatedEdges), 0);
          return updatedEdges;
        });
        return updatedNodes;
      });

      if (selectedNode && nodesToRemove.has(selectedNode.id)) {
        setShowSidebar(false);
        setSelectedNode(null);
      }
    }
  }, [selectedNodes, selectedEdges, selectedNode, saveToHistory]);

  // Handle connect edges
  // const onConnect = useCallback((params) => {
  //   if (!isValidConnection(params)) return;
    
  //   setEdges((eds) => {
  //     const updatedEdges = addEdge({
  //       ...params,
  //       type: 'smoothstep',
  //       markerEnd: {
  //         type: MarkerType.ArrowClosed
  //       },
  //       style: getEdgeStyle(params.sourceHandle, params.targetHandle)
  //     }, eds);
      
  //     setTimeout(() => saveToHistory(nodes, updatedEdges), 0);
  //     return updatedEdges;
  //   });
  // }, [isValidConnection, getEdgeStyle, nodes, saveToHistory]);
  const onConnect = useCallback((params) => {
    const isValid = isValidConnection(params);
    if (!isValid) return;
  
    const newEdge = {
      id: `edge-${params.source}-${params.target}`,
      ...params,
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.ArrowClosed
      },
      style: getEdgeStyle(params.sourceHandle, params.targetHandle, true)
    };
  
    setEdges((eds) => addEdge(newEdge, eds));
  }, [isValidConnection, getEdgeStyle]);

  // Initialize history
  useEffect(() => {
    if (history.length === 0) {
      saveToHistory([], []);
    }
  }, [history.length, saveToHistory]);

  // Handle File actions
  const handleCreateNewFile = () => {
    setShowCreateFileDialog(true);
  };

  const handleSaveNewFile = (fileName) => {
    setNodes([]);
    setEdges([]);
    setNextId(1);
    setBlockCounts({
      'D.PSOC4': 0,
      'Image 2': 0,
      'Image 3': 0,
      'Image 4': 0,
      'Image 5': 0,
      'Image 6': 0
    });
    setCurrentFileName(fileName);
    setHistory([{ nodes: [], edges: [] }]);
    setHistoryIndex(0);
    setNotification(`New file "${fileName}" created`);
    setShowCreateFileDialog(false);
    
    // Save the empty file
    saveFile(fileName);
  };

  const handleOpenFile = (fileName) => {
    try {
      // Use user-specific key to load file data
      const fileData = localStorage.getItem(`file_${userId}_${fileName}`);
      if (fileData) {
        const parsedData = JSON.parse(fileData);
        
        // Reset ReactFlow if needed
        if (reactFlowInstance) {
          reactFlowInstance.fitView();
        }
        
        // Set the data
        const loadedNodes = parsedData.nodes || [];
        const loadedEdges = parsedData.edges || [];
        
        // Update nextId based on loaded nodes
        const newNextId = calculateNextIdFromNodes(loadedNodes);
        setNextId(newNextId);
        
        // Set nodes and edges
        setNodes(loadedNodes);
        setEdges(loadedEdges);
        
        // Set other related data
        setBlockCounts(parsedData.blockCounts || {
          'D.PSOC4': 0,
          'Image 2': 0,
          'Image 3': 0,
          'Image 4': 0,
          'Image 5': 0,
          'Image 6': 0
        });
        setI2cAddresses(parsedData.i2cAddresses || {});
        
        // Update history for undo/redo
        setHistory([{ nodes: loadedNodes, edges: loadedEdges }]);
        setHistoryIndex(0);
        
        setCurrentFileName(fileName);
        setNotification(`File "${fileName}" opened successfully`);
        
        // Add a short delay to allow ReactFlow to properly render nodes
        setTimeout(() => {
          if (reactFlowInstance) {
            reactFlowInstance.fitView();
          }
        }, 300);
      }
    } catch (error) {
      console.error('Error opening file:', error);
      setNotification('Error opening file');
    }
    setShowFileListDialog(false);
  };

  const handleDeleteFile = (fileName) => {
    try {
      // Remove file from localStorage
      localStorage.removeItem(`file_${userId}_${fileName}`);
      
      // Update savedFiles list
      const updatedFiles = savedFiles.filter(file => file !== fileName);
      setSavedFiles(updatedFiles);
      localStorage.setItem(`savedFiles_${userId}`, JSON.stringify(updatedFiles));
      
      // If the deleted file was the current one, clear the current file
      if (currentFileName === fileName) {
        handleCreateNewFile();
      }
      
      setNotification(`File "${fileName}" deleted successfully`);
    } catch (error) {
      console.error('Error deleting file:', error);
      setNotification('Error deleting file');
    }
  };

  const saveCurrentBlockCountsState = useCallback(() => {
    // Calculate actual block counts from nodes
    const actualCounts = {
      'D.PSOC4': 0,
      'Image 2': 0,
      'Image 3': 0,
      'Image 4': 0,
      'Image 5': 0,
      'Image 6': 0
    };
    
    nodes.forEach(node => {
      if (node.data && node.data.label) {
        if (actualCounts[node.data.label] !== undefined) {
          actualCounts[node.data.label]++;
        }
      }
    });
    
    return actualCounts;
  }, [nodes]);

  const saveFile = useCallback((fileName) => {
    try {
      // Save current accurate blockCounts based on actual nodes
      const currentBlockCounts = saveCurrentBlockCountsState();
      
      const fileData = {
        nodes,
        edges,
        blockCounts: currentBlockCounts,
        i2cAddresses,
        createdBy: userId,
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      };
      
      // Save file with user-specific key
      localStorage.setItem(`file_${userId}_${fileName}`, JSON.stringify(fileData));
      
      // Update saved files list if this is a new file
      if (!savedFiles.includes(fileName)) {
        const updatedFiles = [...savedFiles, fileName];
        setSavedFiles(updatedFiles);
        // Store the user's file list separately with user-specific key
        localStorage.setItem(`savedFiles_${userId}`, JSON.stringify(updatedFiles));
      }
      
      setCurrentFileName(fileName);
      setNotification(`File "${fileName}" saved successfully`);
    } catch (error) {
      console.error('Error saving file:', error);
      setNotification('Error saving file');
    }
  }, [nodes, edges, i2cAddresses, userId, savedFiles, saveCurrentBlockCountsState]);

  const handleSaveFile = () => {
    if (currentFileName) {
      // Save to existing file
      saveFile(currentFileName);
    } else {
      // Open create file dialog if no filename exists
      setShowCreateFileDialog(true);
    }
  };

  return (
    <div className="app-container" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'relative'
    }}>
      {/* Notification */}
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}

      {/* Top Toolbar with File/Open buttons */}
      <div className="toolbar" style={{ 
        backgroundColor: '#e5e7eb', 
        padding: '8px', 
        display: 'flex', 
        gap: '8px', 
        height: '30px',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={handleCreateNewFile}
            style={{ 
              padding: '2px 8px', 
              backgroundColor: 'transparent',
              border: '1px solid #9ca3af',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            New
          </button>
          <button 
            onClick={() => setShowFileListDialog(true)}
            style={{ 
              padding: '2px 8px', 
              backgroundColor: 'transparent',
              border: '1px solid #9ca3af',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            Open
          </button>
          <button 
            onClick={handleSaveFile}
            style={{ 
              padding: '2px 8px', 
              backgroundColor: 'transparent',
              border: '1px solid #9ca3af',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Save
          </button>
          {currentFileName && (
            <span style={{ alignSelf: 'center', marginLeft: '8px', color: '#4b5563', fontSize: '0.9rem' }}>
              {currentFileName}
            </span>
          )}
        </div>
        <SignOut />
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Sidebar with draggable items */}
        <SidebarBoxes onDragStart={onDragStart} />

        {/* Main Canvas */}
        <div className="main-content" style={{ flex: '1', position: 'relative' }}>
          {/* Toolbar with actions */}
          <Toolbar
            selectedNodes={selectedNodes}
            selectedEdges={selectedEdges}
            connectSelectedNodes={connectSelectedNodes}
            removeSelection={removeSelection}
            handleUndo={handleUndo}
            handleRedo={handleRedo}
            historyIndex={historyIndex}
            historyLength={history.length}
            setShowI2CModal={setShowI2CModal}
            toggleSplitPane={toggleSplitPane}
            showSplitPane={showSplitPane}
          />
          


{showSplitPane ? (
    <div style={{ height: 'calc(100% - 40px)' }}>
      <SplitPane
        split="vertical"
        defaultSize="50%"
          resizerClassName="custom-resizer"
          size={paneSize}
  onChange={(newSize) => setPaneSize(newSize)}
        style={{ position: 'relative' }}
      >
        {/* Left side - Flow canvas */}
        <div ref={reactFlowWrapper} style={{ height: '100%' }}>
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={handleNodesChange}
              onEdgesChange={handleEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onSelectionChange={onSelectionChange}
              onNodeClick={onNodeClick}
              onPaneClick={onPaneClick}
              onEdgeClick={onEdgeClick} 
              connectionLineType={ConnectionLineType.SmoothStep}
              defaultEdgeOptions={{
                type: 'smoothstep',
                style: customEdgeStyles,
                markerEnd: {
                  type: MarkerType.ArrowClosed
                }
              }}
              fitView
              zoomOnScroll={false}
              panOnScroll
              panOnScrollMode="free"
              zoomOnDoubleClick={false}
              deleteKeyCode={['Backspace', 'Delete']}
              multiSelectionKeyCode={['Control', 'Meta']}
            >
              <Background color="#999" gap={16} />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
                
        {/* Right side - Configuration panel */}
        <div style={{ height: '100%', overflow: 'auto', padding: '15px', backgroundColor: '#f9fafb' }}>
          <h3>Stack Configuratio</h3>
          <div>
            {/* <p>hi</p> */}
            {/* <BoardConfigPanel 
            // nodes={nodes} onNodeOrderChange={handleNodeOrderChange} 
            nodes={boardOrder.length > 0
              ? boardOrder.map(id => nodes.find(n => n.id === id))
              : nodes
            }
            onNodeOrderChange={handleNodeOrderChange}


            /> */}
          <BoardConfigPanel 
  nodes={boardOrder.length > 0
    ? boardOrder.map(id => nodes.find(n => n.id === id)).filter(Boolean)
    : nodes
  }
  edges={edges}
  PORT_RULES={PORT_RULES}
  selectedEdge={selectedEdgeForConfig} // Add this line
  onNodeOrderChange={handleNodeOrderChange}
  
  
/>
{/* <BoardConfigPanel 
  nodes={boardOrder.length > 0
    ? boardOrder.map(id => nodes.find(n => n.id === id))
    : nodes
  }
  edges={edges}
  PORT_RULES={PORT_RULES}
/>     */}
        {/* You can add your configuration components here */}
          </div>
        </div>
      </SplitPane>
    </div>
  ) : (
    <div ref={reactFlowWrapper} style={{ height: 'calc(100% - 40px)' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={handleNodesChange}
          onEdgesChange={handleEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onSelectionChange={onSelectionChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          connectionLineType={ConnectionLineType.SmoothStep}
          defaultEdgeOptions={{
            type: 'smoothstep',
            style: customEdgeStyles,
            markerEnd: {
              type: MarkerType.ArrowClosed
            }
          }}
          fitView
          zoomOnScroll={false}
          panOnScroll
          panOnScrollMode="free"
          zoomOnDoubleClick={false}
          deleteKeyCode={['Backspace', 'Delete']}
          multiSelectionKeyCode={['Control', 'Meta']}
        >
          <Background color="#999" gap={16} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </ReactFlowProvider>
    </div>)}

          {/* Node Properties Sidebar */}
          {showSidebar && selectedNode && (
            <NodePropertiesSidebar
              node={selectedNode}
              onClose={() => setShowSidebar(false)}
              onUpdateNodeName={updateNodeName}
              onUpdateI2CAddress={updateI2CAddress}
              i2cAddresses={i2cAddresses}
              setNodes={setNodes}
              

            />
          )}
        </div>
      </div>

      {/* I2C Address Modal */}
      {showI2CModal && (
        <I2CAddressModal
          onClose={() => setShowI2CModal(false)}
          i2cAddresses={i2cAddresses}
        />
      )}

      {/* Create File Dialog */}
      {showCreateFileDialog && (
        <CreateFileDialog
          onSave={handleSaveNewFile}
          onCancel={() => setShowCreateFileDialog(false)}
        />
      )}

      {/* File List Dialog */}
      {showFileListDialog && (
        <FileListDialog
          files={savedFiles}
          onOpen={handleOpenFile}
          onDelete={handleDeleteFile}
          onClose={() => setShowFileListDialog(false)}
        />
      )}
    </div>
  );
}