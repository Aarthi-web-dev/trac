// import React from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   if (!nodes || nodes.length === 0) {
//     return <div>No nodes available</div>;
//   }

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div key={`${type}-${i}`} style={{ display: 'inline-block', width: '20px', textAlign: 'center' }}>
//           <div
//             style={{
//               width: '8px',
//               height: '8px',
//               borderRadius: '50%',
//               backgroundColor: type === 'input' ? 'black' : 'orange',
//               marginRight: '0 auto 4px'
//             }}
//           />
//           <span style={{ fontSize: '12px' }}>{type === 'input' }</span>
//         </div>
//       );
//     }
//     // return pins;
//     return (
//         <div style={{ marginBottom: '10px' }}>
//           {pins}
//         </div>
//       );
//   };

//   return (
//     <div style={{ padding: '10px', overflowY: 'auto', height: '100%', width:'60%' }}>
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           style={{
//             border: '1px solid #ccc',
//             borderRadius: '6px',
//             padding: '10px',
//             marginBottom: '15px',
//             backgroundColor: '#f9f9f9'
//           }}
//         >
//           <h4 style={{ margin: 0, fontSize: '14px',  marginBottom: '15px', }}>
//             {node.data.customName || node.data.label}
//           </h4>
//           {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//             <div>{renderPins('input', 16)}</div>
//             <div>{renderPins('output', 16)}</div>
//           </div> */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//   <div>{renderPins('input', 16)}</div>
//   <div>{renderPins('output', 16)}</div>
// </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// import React from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   if (!nodes || nodes.length === 0) {
//     return <div>No nodes available</div>;
//   }

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '8px',
//               height: '8px',
//               borderRadius: '50%',
//               backgroundColor: type === 'input' ? 'black' : 'orange',
//               margin: '0 auto 4px',
//             }}
//           />
//           {/* Optional: Add label below each pin */}
//           {/* <span style={{ fontSize: '10px', color: '#666' }}>{i}</span> */}
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px', // 16 pins * 20px
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '200px',
//         width: '350px', // Fixed width
//         flexShrink: 0, // Prevent resizing
//       }}
//     >
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           style={{
//             border: '1px solid #ccc',
//             borderRadius: '6px',
//             padding: '10px',
//             marginBottom: '10px',
//             backgroundColor: '#f9f9f9',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           }}
//         >
//           {/* <h4 style={{ margin: 0, fontSize: '14px', marginBottom: '10px' }}>
//             {node.data.customName || node.data.label}
//           </h4> */}

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//             <div>{renderPins('input', 16)}</div>
//             <div>{renderPins('output', 16)}</div>
//           </div>
//         </div>
        
//       ))}
     
//     </div>
//   );
// };

// export default BoardConfigPanel;


// import React from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   if (!nodes || nodes.length === 0) {
//     return <div>No nodes available</div>;
//   }

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '8px',
//               height: '8px',
//               borderRadius: '50%',
//               backgroundColor: type === 'input' ? 'black' : 'orange',
//               margin: '0 auto 4px',
//             }}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px', // 16 pins * 20px
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '200px',
//         width: '450px',
//         flexShrink: 0,
//       }}
//     >
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           style={{
//             border: '1px solid #ccc',
//             borderRadius: '6px',
//             padding: '10px',
//             marginBottom: '10px',
//             backgroundColor: '#f9f9f9',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           {/* Left Side: Pins */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//             <div>{renderPins('input', 16)}</div>
//             <div>{renderPins('output', 16)}</div>
//           </div>

//           {/* Right Side: Node Name / Label */}
//           <div style={{ marginLeft: '10px', whiteSpace: 'nowrap' }}>
//             <h4
//               style={{
//                 margin: 0,
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//               }}
//             >
//               {node.data.customName || node.data.label}
//             </h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// import React from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   if (!nodes || nodes.length === 0) {
//     return <div>No nodes available</div>;
//   }

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '8px',
//               height: '8px',
//               borderRadius: '50%',
//               backgroundColor: type === 'input' ? 'black' : 'orange',
//               margin: '0 auto 4px',
//             }}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px', // 16 pins * 20px
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '350px',
//         flexShrink: 0,
//       }}
//     >
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           style={{
//             marginBottom: '10px',
//           }}
//         >
//           {/* Node Name - Outside the board, top-right */}
//           <div
//             style={{
//               textAlign: 'right',
//               marginBottom: '4px',
//               paddingRight: '6px',
//             }}
//           >
//             <strong
//               style={{
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 color: '#333',
//               }}
//             >
//               {node.data.customName || node.data.label}
//             </strong>
//           </div>

//           {/* Bordered Board Container */}
//           <div
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '6px',
//               padding: '10px',
//               backgroundColor: '#f9f9f9',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}
//           >
//             {/* Left Side: Pins */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//               <div>{renderPins('input', 16)}</div>
//               <div>{renderPins('output', 16)}</div>
//             </div>
//           </div>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// Good
// import React from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   if (!nodes || nodes.length === 0) {
//     return <div>No nodes available</div>;
//   }

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '8px',
//               height: '8px',
//               borderRadius: '50%',
//               backgroundColor: type === 'input' ? 'black' : 'orange',
//               margin: '0 auto 4px',
//             }}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//         //   overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px', // 16 pins * 20px
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '350px',
//         flexShrink: 0,
//       }}
//     >
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           style={{
//             marginBottom: '20px',
//             position: 'relative',
//           }}
//         >
//           {/* Bordered Board Container */}
//           <div
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '6px',
//               padding: '10px',
//               backgroundColor: '#f9f9f9',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}
//           >
//             {/* Left Side: Pins */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//               <div>{renderPins('input', 16)}</div>
//               <div>{renderPins('output', 16)}</div>
//             </div>
//           </div>
          
//           {/* Node Name - Right side of the board, vertically centered */}
//           <div
//             style={{
//               position: 'absolute',
//               right: '-110px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <div
//             //   style={{
//             //     width: '100px',
//             //     height: '2px',
//             //     backgroundColor: 'orange',
//             //     marginRight: '5px',
//             //   }}
//             />
//             <strong
//               style={{
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 color: '#333',
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               {node.data.customName || node.data.label}
//             </strong>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// send
// import React from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   if (!nodes || nodes.length === 0) {
//     return <div>No nodes available</div>;
//   }

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//             //   backgroundColor: type === 'input' ? 'black' : 'orange',
//             border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//             backgroundColor: 'transparent',
//               margin: '2px',
//             }}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px', // 16 pins * 20px
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//       }}
//     >
//       {nodes.map((node) => (
//         <div
//           key={node.id}
//           style={{
//             marginBottom: '20px',
//           }}
//         >
//           {/* Bordered Board Container with Label */}
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Board with pins */}
//             <div
//               style={{
//                 border: '2px solid black',
//                 borderRadius: '6px',
//                 padding: '10px',
//                 backgroundColor: '#f9f9f9',
//                 boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                 width: '320px',
//                 flexShrink: 0,
//               }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                 <div>{renderPins('input', 16)}</div>
//                 <div>{renderPins('output', 16)}</div>
//               </div>
//             </div>
            
//             {/* Node Name with connector line */}
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginLeft: '4px',
//                 minWidth: 0,
//                 overflow: 'hidden',
//               }}
//             >
//               <div
                
//               />
//               <strong
//                 style={{
//                   fontSize: '14px',
//                   fontWeight: 'bold',
//                   color: '#333',
//                   marginLeft: '5px',
//                   whiteSpace: 'nowrap',
//                   overflow: 'hidden',
//                   textOverflow: 'ellipsis',
//                 }}
//               >
//                 {node.data.customName || node.data.label}<br/>{ node.data.label}
//               </strong>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardConfigPanel;

//perfect1
// import React, { useState } from 'react';

// const BoardConfigPanel = ({ nodes }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes);

//   // Update local state when prop changes
//   React.useEffect(() => {
//     setOrderedNodes(nodes);
//   }, [nodes]);

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: 'transparent',
//               margin: '2px',
//             }}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//       }}
//     >
//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         orderedNodes.map((node, index) => (
//           <div
//             key={node.id}
//             draggable
//             onDragStart={(e) => handleDragStart(e, index)}
//             onDragEnd={handleDragEnd}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, index)}
//             style={{
//               marginBottom: '20px',
//               cursor: 'grab',
//             //   border: '1px solid #ddd',
//               borderRadius: '6px',
//               padding: '8px',
//             //   backgroundColor: '#fff',
//             //   boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//             //   transition: 'background-color 0.2s',
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor )}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor )}
//           >
//             {/* Bordered Board Container with Label */}
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 overflow: 'hidden',
//               }}
//             >
//               {/* Board with pins */}
//               <div
//                 style={{
//                   border: '2px solid black',
//                   borderRadius: '6px',
//                   padding: '10px',
//                   backgroundColor: '#f9f9f9',
//                   boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                   width: '320px',
//                   flexShrink: 0,
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                   <div>{renderPins('input', 16)}</div>
//                   <div>{renderPins('output', 16)}</div>
//                 </div>
//               </div>

//               {/* Node Name with connector line */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   marginLeft: '4px',
//                   minWidth: 0,
//                   overflow: 'hidden',
//                 }}
//               >
//                 <strong
//                   style={{
//                     fontSize: '14px',
//                     fontWeight: 'bold',
//                     color: '#333',
//                     marginLeft: '5px',
//                     whiteSpace: 'nowrap',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                   }}
//                 >
//                   {node.data.customName || node.data.label}
//                   <br />
//                   <small>{node.data.label}</small>
//                 </strong>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;
// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };

//   // Get all connection lines to draw between boards
//   const getConnectionLines = () => {
//     const lines = [];
    
//     for (let i = 0; i < orderedNodes.length - 1; i++) {
//       const currentNode = orderedNodes[i];
//       const nextNode = orderedNodes[i + 1];
      
//       if (!currentNode || !nextNode) continue;
      
//       // Check if there are actual connections between these nodes
//       const connections = getConnectionsBetweenNodes(currentNode.id, nextNode.id);
      
//       if (connections.length > 0) {
//         connections.forEach(connection => {
//           const sourcePort = connection.sourceHandle; // e.g., "right-0"
//           const targetPort = connection.targetHandle; // e.g., "left-0"
          
//           // Get possible connections based on rules
//           const possibleConnections = getPossibleConnections(
//             currentNode, 
//             nextNode, 
//             sourcePort, 
//             targetPort
//           );
          
//           // Determine line style based on number of possibilities
//           const lineStyle = possibleConnections.length === 1 ? 'solid' : 'dashed';
          
//           // Create lines for each possible connection
//           possibleConnections.forEach(portNumber => {
//             lines.push({
//               fromBoardIndex: i,
//               toBoardIndex: i + 1,
//               fromPort: portNumber,
//               toPort: portNumber,
//               style: lineStyle,
//               sourceHandle: sourcePort,
//               targetHandle: targetPort
//             });
//           });
//         });
//       }
//     }
    
//     return lines;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const pins = [];
//     for (let i = 0; i < count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Render connection lines
//   const renderConnectionLines = () => {
//     const lines = getConnectionLines();
    
//     return lines.map((line, index) => {
//       const boardHeight = 80; // Approximate height of each board section
//       const boardSpacing = 100; // Space between boards
//       const pinWidth = 20; // Width of each pin
//       const pinsPerRow = 16;
      
//       // Calculate positions
//       const fromY = line.fromBoardIndex * boardSpacing + boardHeight;
//       const toY = (line.toBoardIndex * boardSpacing) + 20;
//       const pinX = (line.fromPort * pinWidth) + 10; // Center of pin
      
//       return (
//         <line
//           key={`connection-${index}`}
//           x1={pinX}
//           y1={fromY}
//           x2={pinX}
//           y2={toY}
//           stroke="#666"
//           strokeWidth="1"
//           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//           opacity="0.7"
//         />
//       );
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 1,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;
// dotted
// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };

//   // Get all connection lines to draw between boards
//   const getConnectionLines = () => {
//     const lines = [];
    
//     for (let i = 0; i < orderedNodes.length - 1; i++) {
//       const currentNode = orderedNodes[i];
//       const nextNode = orderedNodes[i + 1];
      
//       if (!currentNode || !nextNode) continue;
      
//       // Check if there are actual connections between these nodes
//       const connections = getConnectionsBetweenNodes(currentNode.id, nextNode.id);
      
//       if (connections.length > 0) {
//         connections.forEach(connection => {
//           const sourcePort = connection.sourceHandle; // e.g., "right-0"
//           const targetPort = connection.targetHandle; // e.g., "left-0"
          
//           // Get possible connections based on rules
//           const possibleConnections = getPossibleConnections(
//             currentNode, 
//             nextNode, 
//             sourcePort, 
//             targetPort
//           );
          
//           // Determine line style based on number of possibilities
//           const lineStyle = possibleConnections.length === 1 ? 'solid' : 'dashed';
          
//           // Create lines for each possible connection
//           possibleConnections.forEach(portNumber => {
//             lines.push({
//               fromBoardIndex: i,
//               toBoardIndex: i + 1,
//               fromPort: portNumber,
//               toPort: portNumber,
//               style: lineStyle,
//               sourceHandle: sourcePort,
//               targetHandle: targetPort
//             });
//           });
//         });
//       }
//     }
    
//     return lines;
//   };

//   // Get all connected ports for styling
//   const getConnectedPorts = () => {
//     const connectedPorts = new Set();
//     const lines = getConnectionLines();
    
//     lines.forEach(line => {
//       connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
//       connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
//     });
    
//     return connectedPorts;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const connectedPorts = getConnectedPorts();
//     const pins = [];
    
//     for (let i = 0; i < count; i++) {
//       const portKey = `${boardIndex}-${type}-${i}`;
//       const isConnected = connectedPorts.has(portKey);
      
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Calculate port position
//   const getPortPosition = (boardIndex, portIndex, type) => {
//      const boardSpacing = 110;
//     const boardTopPadding = 8;
//     const boardBorderPadding = 12;
//     const pinRowHeight = 5;
    
//     // Add these offsets to move lines
//     const X_OFFSET = 9; // Move right
//     const Y_OFFSET = 28; // Move down
    
//     // Y position with offset
//     const containerY = boardIndex * boardSpacing + boardTopPadding + Y_OFFSET;
//     const boardY = containerY + boardBorderPadding;
//     const portY = type === 'input' ? boardY : boardY + pinRowHeight;
    
//     // X position with offset
//     const pinWidth = 20;
//     const boardStartX = 8 + boardBorderPadding + X_OFFSET; // Add X offset here
//     const portX = boardStartX + (portIndex * pinWidth) + 10;
    
//     return { x: portX, y: portY };
//     // const boardSpacing = 108; // Total height including margin bottom (80 + 20 + 8)
//     // const boardTopPadding = 8; // Container padding
//     // const boardBorderPadding = 12; // Board internal padding + border
//     // const pinRowHeight = 12; // Height of each pin row including spacing
    
    
//     // // Calculate Y position
//     // const containerY = boardIndex * boardSpacing + boardTopPadding;
//     // const boardY = containerY + boardBorderPadding;
//     // const portY = type === 'input' ? boardY : boardY + pinRowHeight;
    
//     // // Calculate X position - center of each pin
//     // const pinWidth = 20;
//     // const boardStartX = 8 + boardBorderPadding; // Container padding + board padding
//     // const portX = boardStartX + (portIndex * pinWidth) + 10; // Center of pin
    
//     // return { x: portX, y: portY };
    
//   };

//   // Render connection lines
//   const renderConnectionLines = () => {
//     const lines = getConnectionLines();
    
//     return lines.map((line, index) => {
//       // Get positions for source and target ports
//       const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//       const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
//       return (
//         <line
//           key={`connection-${index}`}
//           x1={sourcePos.x}
//           y1={sourcePos.y}
//           x2={targetPos.x}
//           y2={targetPos.y}
//           stroke="#666"
//           strokeWidth="1.5"
//           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//           opacity="0.7"
//         />
//       );
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 10,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// all good

// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };

//   // Get all connection lines to draw between boards
//   const getConnectionLines = () => {
//     const lines = [];
    
//     for (let i = 0; i < orderedNodes.length - 1; i++) {
//       const currentNode = orderedNodes[i];
//       const nextNode = orderedNodes[i + 1];
      
//       if (!currentNode || !nextNode) continue;
      
//       // Check if there are actual connections between these nodes
//       const connections = getConnectionsBetweenNodes(currentNode.id, nextNode.id);
      
//       if (connections.length > 0) {
//         connections.forEach(connection => {
//           const sourcePort = connection.sourceHandle; // e.g., "right-3"
//           const targetPort = connection.targetHandle; // e.g., "left-1"
          
//           // Extract port numbers from handles
//           const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
//           const targetPortNumber = parseInt(targetPort.split('-')[1], 10);
          
//           // Special handling for Image 1 (D.PSOC4) connections
//           if (currentNode.data.label === 'D.PSOC4') {
//             // Create a solid line connecting the actual ports that are connected
//             lines.push({
//               fromBoardIndex: i,
//               toBoardIndex: i + 1,
//               fromPort: sourcePortNumber,  // Use actual source port number
//               toPort: sourcePortNumber,    // Use actual target port number
//               style: 'solid',
//               sourceHandle: sourcePort,
//               targetHandle: targetPort,
//               isSpecificConnection: true
//             });
//           } else {
//             // Original logic for other nodes
//             // Get possible connections based on rules
//             const possibleConnections = getPossibleConnections(
//               currentNode, 
//               nextNode, 
//               sourcePort, 
//               targetPort
//             );
            
//             // Determine line style based on number of possibilities
//             const lineStyle = possibleConnections.length === 1 ? 'solid' : 'dashed';
            
//             // Create lines for each possible connection
//             possibleConnections.forEach(portNumber => {
//               lines.push({
//                 fromBoardIndex: i,
//                 toBoardIndex: i + 1,
//                 fromPort: portNumber,
//                 toPort: portNumber,
//                 style: lineStyle,
//                 sourceHandle: sourcePort,
//                 targetHandle: targetPort
//               });
//             });
//           }
//         });
//       }
//     }
    
//     return lines;
//   };

//   // Get all connected ports for styling
//   const getConnectedPorts = () => {
//     const connectedPorts = new Set();
//     const lines = getConnectionLines();
    
//     lines.forEach(line => {
//       connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
//       connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
//     });
    
//     return connectedPorts;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const connectedPorts = getConnectedPorts();
//     const pins = [];
    
//     for (let i = 0; i < count; i++) {
//       const portKey = `${boardIndex}-${type}-${i}`;
//       const isConnected = connectedPorts.has(portKey);
      
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Calculate port position
//   const getPortPosition = (boardIndex, portIndex, type) => {
//      const boardSpacing = 110;
//     const boardTopPadding = 8;
//     const boardBorderPadding = 12;
//     const pinRowHeight = 5;
    
//     // Add these offsets to move lines
//     const X_OFFSET = 9; // Move right
//     const Y_OFFSET = 28; // Move down
    
//     // Y position with offset
//     const containerY = boardIndex * boardSpacing + boardTopPadding + Y_OFFSET;
//     const boardY = containerY + boardBorderPadding;
//     const portY = type === 'input' ? boardY : boardY + pinRowHeight;
    
//     // X position with offset
//     const pinWidth = 20;
//     const boardStartX = 8 + boardBorderPadding + X_OFFSET; // Add X offset here
//     const portX = boardStartX + (portIndex * pinWidth) + 10;
    
//     return { x: portX, y: portY };
//   };

//   // Render connection lines
//   const renderConnectionLines = () => {
//     const lines = getConnectionLines();
    
//     return lines.map((line, index) => {
//       // Get positions for source and target ports
//       const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//       const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
//       return (
//         <line
//           key={`connection-${index}`}
//           x1={sourcePos.x}
//           y1={sourcePos.y}
//           x2={targetPos.x}
//           y2={targetPos.y}
//           stroke="#666"
//           strokeWidth="1.5"
//           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//           opacity="0.7"
//         />
//       );
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 10,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;


// going well-1
// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };

// const getConnectionLines = () => {
//   const lines = [];

//   edges.forEach((edge) => {
//     const sourceNodeId = edge.source;
//     const targetNodeId = edge.target;
//     const sourcePort = edge.sourceHandle; // e.g., "right-2"
//     const targetPort = edge.targetHandle; // e.g., "left-14"

//     const sourceNode = nodes.find(n => n.id === sourceNodeId);
//     const targetNode = nodes.find(n => n.id === targetNodeId);

//     if (!sourceNode || !targetNode) return;

//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;

//     const fromBoardIndex = orderedNodes.findIndex(n => n.id === sourceNodeId);
//     const toBoardIndex = orderedNodes.findIndex(n => n.id === targetNodeId);

//     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

//     const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
//     const targetPortNumber = parseInt(targetPort.split('-')[1], 10);

//     // Special case: Connection FROM D.PSOC4 to another node
//     if (
//       sourceLabel === 'D.PSOC4' &&
//       sourcePort.startsWith('right') &&
//       targetPort.startsWith('left')
//     ) {
//       lines.push({
//         fromBoardIndex,
//         toBoardIndex,
//         fromPort: sourcePortNumber,
//         toPort: sourcePortNumber,
//         style: 'solid',
//         sourceHandle: sourcePort,
//         targetHandle: targetPort,
//         isSpecificConnection: true
//       });
//     }

//     // NEW SPECIAL CASE: Connection TO D.PSOC4 from any node
//     else if (
//       targetLabel === 'D.PSOC4' &&
//       sourcePort.startsWith('right') &&
//       targetPort.startsWith('left')
//     ) {
//       lines.push({
//         fromBoardIndex,
//         toBoardIndex,
//         fromPort: sourcePortNumber,
//         toPort: sourcePortNumber,
//         style: 'solid',
//         sourceHandle: sourcePort,
//         targetHandle: targetPort,
//         isSpecificConnection: true
//       });
//     }

//     // Default behavior for all other connections
//     else {
//       const possibleConnections = getPossibleConnections(
//         sourceNode, targetNode, sourcePort, targetPort
//       );
//       const lineStyle = possibleConnections.length === 1 ? 'solid' : 'dashed';

//       possibleConnections.forEach(portNumber => {
//         lines.push({
//           fromBoardIndex,
//           toBoardIndex,
//           fromPort: portNumber,
//           toPort: portNumber,
//           style: lineStyle,
//           sourceHandle: sourcePort,
//           targetHandle: targetPort
//         });
//       });
//     }
//   });

//   return lines;
// };


//   // Get all connected ports for styling
  
  
  
  
//   const getConnectedPorts = () => {
//     const connectedPorts = new Set();
//     const lines = getConnectionLines();
    
//     lines.forEach(line => {
//       connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
//       connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
//     });
    
//     return connectedPorts;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const connectedPorts = getConnectedPorts();
//     const pins = [];
    
//     for (let i = 0; i < count; i++) {
//       const portKey = `${boardIndex}-${type}-${i}`;
//       const isConnected = connectedPorts.has(portKey);
      
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Calculate port position
//   const getPortPosition = (boardIndex, portIndex, type) => {
//      const boardSpacing = 110;
//     const boardTopPadding = 8;
//     const boardBorderPadding = 12;
//     const pinRowHeight = 5;
    
//     // Add these offsets to move lines
//     const X_OFFSET = 9; // Move right
//     const Y_OFFSET = 28; // Move down
    
//     // Y position with offset
//     const containerY = boardIndex * boardSpacing + boardTopPadding + Y_OFFSET;
//     const boardY = containerY + boardBorderPadding;
//     const portY = type === 'input' ? boardY : boardY + pinRowHeight;
    
//     // X position with offset
//     const pinWidth = 20;
//     const boardStartX = 8 + boardBorderPadding + X_OFFSET; // Add X offset here
//     const portX = boardStartX + (portIndex * pinWidth) + 10;
    
//     return { x: portX, y: portY };
//   };

//   // Render connection lines
//   const renderConnectionLines = () => {
//     const lines = getConnectionLines();
    
//     return lines.map((line, index) => {
//       // Get positions for source and target ports
//       const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//       const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
//       return (
//         <line
//           key={`connection-${index}`}
//           x1={sourcePos.x}
//           y1={sourcePos.y}
//           x2={targetPos.x}
//           y2={targetPos.y}
//           stroke="#666"
//           strokeWidth="1.5"
//           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//           opacity="0.7"
//         />
//       );
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 10,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;
// goingwell2
// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES , selectedEdge}) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };


//   // Get all connected ports for styling
  
//   const getConnectionLines = () => {
//   const lines = [];

//   // Process ALL edges, not just selectedEdge
//   if (!edges) return lines;

//   edges.forEach(edge => {
//     const sourceNodeId = edge.source;
//     const targetNodeId = edge.target;
//     const sourcePort = edge.sourceHandle;
//     const targetPort = edge.targetHandle;

//     const sourceNode = nodes.find(n => n.id === sourceNodeId);
//     const targetNode = nodes.find(n => n.id === targetNodeId);

//     if (!sourceNode || !targetNode) return;

//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;

//     const fromBoardIndex = orderedNodes.findIndex(n => n.id === sourceNodeId);
//     const toBoardIndex = orderedNodes.findIndex(n => n.id === targetNodeId);

//     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

//     const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
//     const targetPortNumber = parseInt(targetPort.split('-')[1], 10);

//     // Check if this is the selected edge
//     const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;

//     // Special cases for D.PSOC4 - ALWAYS SOLID
//     // if (
//     //   (sourceLabel === 'D.PSOC4' && sourcePort.startsWith('right') && targetPort.startsWith('left')) ||
//     //   (targetLabel === 'D.PSOC4' && sourcePort.startsWith('right') && targetPort.startsWith('left'))
//     // ) {
//     //   lines.push({
//     //     fromBoardIndex,
//     //     toBoardIndex,
//     //     fromPort: sourcePortNumber,
//     //     toPort: sourcePortNumber,
//     //     style: 'solid',
//     //     sourceHandle: sourcePort,
//     //     targetHandle: targetPort,
//     //     isSpecificConnection: true,
//     //     edgeId: edge.id
//     //   });
//     // }
//     //   // Special case: Connection FROM D.PSOC4 to another node
//   if (
//     sourceLabel === 'D.PSOC4' &&
//     sourcePort.startsWith('right') &&
//     targetPort.startsWith('left')
//   ) {
//     lines.push({
//       fromBoardIndex,
//       toBoardIndex,
//       fromPort: sourcePortNumber,
//       toPort: sourcePortNumber,
//       style: 'solid',
//       sourceHandle: sourcePort,
//       targetHandle: targetPort,
//       isSpecificConnection: true
//     });
//   }

//   // Special case: Connection TO D.PSOC4 from any node
//   else if (
//     targetLabel === 'D.PSOC4' &&
//     sourcePort.startsWith('right') &&
//     targetPort.startsWith('left')
//   ) {
//     lines.push({
//       fromBoardIndex,
//       toBoardIndex,
//       fromPort: targetPortNumber,
//       toPort: targetPortNumber,
//       style: 'solid',
//       sourceHandle: sourcePort,
//       targetHandle: targetPort,
//       isSpecificConnection: true
//     });
//   }

//     // For other connections
//     else {
//       const possibleConnections = getPossibleConnections(
//         sourceNode, targetNode, sourcePort, targetPort
//       );

//       if (possibleConnections.length === 1) {
//         // Single possible connection - ALWAYS SOLID
//         lines.push({
//           fromBoardIndex,
//           toBoardIndex,
//           fromPort: possibleConnections[0],
//           toPort: possibleConnections[0],
//           style: 'solid',
//           sourceHandle: sourcePort,
//           targetHandle: targetPort,
//           edgeId: edge.id
//         });
//       } else if (isSelectedEdge) {
//         // Multiple possible connections - DOTTED (only when edge is selected)
//         possibleConnections.forEach(portNumber => {
//           lines.push({
//             fromBoardIndex,
//             toBoardIndex,
//             fromPort: portNumber,
//             toPort: portNumber,
//             style: 'dashed',
//             sourceHandle: sourcePort,
//             targetHandle: targetPort,
//             edgeId: edge.id
//           });
//         });
//       } else {
//         // Multiple connections but not selected - show only the actual connection as SOLID
//         // lines.push({
//         //   fromBoardIndex,
//         //   toBoardIndex,
//         //   fromPort: sourcePortNumber,
//         //   toPort: targetPortNumber,
//         //   // style: 'solid',
//         //   sourceHandle: sourcePort,
//         //   targetHandle: targetPort,
//         //   edgeId: edge.id
//         // });
//       }
//     }
//   });

//   return lines;
// };
  
  
//   const getConnectedPorts = () => {
//     const connectedPorts = new Set();
//     const lines = getConnectionLines();
    
//     lines.forEach(line => {
//       connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
//       connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
//     });
    
//     return connectedPorts;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const connectedPorts = getConnectedPorts();
//     const pins = [];
    
//     for (let i = 0; i < count; i++) {
//       const portKey = `${boardIndex}-${type}-${i}`;
//       const isConnected = connectedPorts.has(portKey);
      
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Calculate port position
//   const getPortPosition = (boardIndex, portIndex, type) => {
//      const boardSpacing = 110;
//     const boardTopPadding = 8;
//     const boardBorderPadding = 12;
//     const pinRowHeight = 5;
    
//     // Add these offsets to move lines
//     const X_OFFSET = 9; // Move right
//     const Y_OFFSET = 28; // Move down
    
//     // Y position with offset
//     const containerY = boardIndex * boardSpacing + boardTopPadding + Y_OFFSET;
//     const boardY = containerY + boardBorderPadding;
//     const portY = type === 'input' ? boardY : boardY + pinRowHeight;
    
//     // X position with offset
//     const pinWidth = 20;
//     const boardStartX = 8 + boardBorderPadding + X_OFFSET; // Add X offset here
//     const portX = boardStartX + (portIndex * pinWidth) + 10;
    
//     return { x: portX, y: portY };
//   };

//   // Render connection lines
//   const renderConnectionLines = () => {
//     const lines = getConnectionLines();
    
//     return lines.map((line, index) => {
//       // Get positions for source and target ports
//       const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//       const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
//       return (
//         <line
//           key={`connection-${index}`}
//           x1={sourcePos.x}
//           y1={sourcePos.y}
//           x2={targetPos.x}
//           y2={targetPos.y}
//           stroke="#666"
//           strokeWidth="1.5"
//           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//           opacity="0.7"
//         />
//       );
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 10,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// still

// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES, selectedEdge, onEdgeUpdate }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);
//   const [solidConnections, setSolidConnections] = useState(new Set()); // Track solid connections

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };

//   // Check if a specific port connection is already solid
//   const isSolidConnection = (fromBoardIndex, toBoardIndex, portNumber) => {
//     return solidConnections.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
//   };

//   // Handle clicking on a dotted line to make it solid
//   const handleDottedLineClick = (fromBoardIndex, toBoardIndex, portNumber, edgeId) => {
//     const connectionKey = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
//     setSolidConnections(prev => new Set([...prev, connectionKey]));
    
//     // Optional: Call parent component to update edge data
//     if (onEdgeUpdate) {
//       onEdgeUpdate(edgeId, { solidPort: portNumber });
//     }
//   };

//   // Get all connected ports for styling
// // const getConnectionLines = () => {
// //   const lines = [];

// //   // Process ALL edges, not just selectedEdge
// //   if (!edges) return lines;

// //   edges.forEach(edge => {
// //     const sourceNodeId = edge.source;
// //     const targetNodeId = edge.target;
// //     const sourcePort = edge.sourceHandle;
// //     const targetPort = edge.targetHandle;

// //     const sourceNode = nodes.find(n => n.id === sourceNodeId);
// //     const targetNode = nodes.find(n => n.id === targetNodeId);

// //     if (!sourceNode || !targetNode) return;

// //     const sourceLabel = sourceNode.data.label;
// //     const targetLabel = targetNode.data.label;

// //     const fromBoardIndex = orderedNodes.findIndex(n => n.id === sourceNodeId);
// //     const toBoardIndex = orderedNodes.findIndex(n => n.id === targetNodeId);

// //     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

// //     const sourcePortNumber = parseInt(sourcePort.split('-')[1], 10);
// //     const targetPortNumber = parseInt(targetPort.split('-')[1], 10);

// //     // Check if this is the selected edge
// //     const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;

// //     // Special case: Connection FROM D.PSOC4 to another node
// //     if (
// //       sourceLabel === 'D.PSOC4' &&
// //       sourcePort.startsWith('right') &&
// //       targetPort.startsWith('left')
// //     ) {
// //       lines.push({
// //         fromBoardIndex,
// //         toBoardIndex,
// //         fromPort: sourcePortNumber,
// //         toPort: sourcePortNumber,
// //         style: 'solid',
// //         sourceHandle: sourcePort,
// //         targetHandle: targetPort,
// //         isSpecificConnection: true,
// //         edgeId: edge.id
// //       });
// //     }

// //     // Special case: Connection TO D.PSOC4 from any node
// //     else if (
// //       targetLabel === 'D.PSOC4' &&
// //       sourcePort.startsWith('right') &&
// //       targetPort.startsWith('left')
// //     ) {
// //       lines.push({
// //         fromBoardIndex,
// //         toBoardIndex,
// //         fromPort: targetPortNumber,
// //         toPort: targetPortNumber,
// //         style: 'solid',
// //         sourceHandle: sourcePort,
// //         targetHandle: targetPort,
// //         isSpecificConnection: true,
// //         edgeId: edge.id
// //       });
// //     }

// //     // For other connections
// //     else {
// //       const possibleConnections = getPossibleConnections(
// //         sourceNode, targetNode, sourcePort, targetPort
// //       );

// //       if (possibleConnections.length === 1) {
// //         // Single possible connection - ALWAYS SOLID
// //         lines.push({
// //           fromBoardIndex,
// //           toBoardIndex,
// //           fromPort: possibleConnections[0],
// //           toPort: possibleConnections[0],
// //           style: 'solid',
// //           sourceHandle: sourcePort,
// //           targetHandle: targetPort,
// //           edgeId: edge.id
// //         });
// //       } else if (isSelectedEdge) {
// //         // Multiple possible connections - check if any solid connection exists
// //         const hasSolidConnection = possibleConnections.some(portNumber => 
// //           isSolidConnection(fromBoardIndex, toBoardIndex, portNumber)
// //         );

// //         if (hasSolidConnection) {
// //           // Show only the solid connection(s)
// //           possibleConnections.forEach(portNumber => {
// //             const isAlreadySolid = isSolidConnection(fromBoardIndex, toBoardIndex, portNumber);
            
// //             if (isAlreadySolid) {
// //               lines.push({
// //                 fromBoardIndex,
// //                 toBoardIndex,
// //                 fromPort: portNumber,
// //                 toPort: portNumber,
// //                 style: 'solid',
// //                 sourceHandle: sourcePort,
// //                 targetHandle: targetPort,
// //                 edgeId: edge.id,
// //                 clickable: false
// //               });
// //             }
// //           });
// //         } else {
// //           // No solid connection exists - show all as dotted
// //           possibleConnections.forEach(portNumber => {
// //             lines.push({
// //               fromBoardIndex,
// //               toBoardIndex,
// //               fromPort: portNumber,
// //               toPort: portNumber,
// //               style: 'dashed',
// //               sourceHandle: sourcePort,
// //               targetHandle: targetPort,
// //               edgeId: edge.id,
// //               clickable: true
// //             });
// //           });
// //         }
// //       }
// //     }
// //   });

// //   return lines;
// // };



// //   const getConnectionLines = () => {
// //   const lines = [];
// //   const solidPortSet = new Set(); // Track solid connections for current processing
// //   const allSolidConnectionPoints = new Set(); // Track all solid connection points globally
  
// //   if (!edges) return lines;

// //   // First pass: collect ALL solid connections with their exact visual positions
// //   edges.forEach(edge => {
// //     const sourceNode = nodes.find(n => n.id === edge.source);
// //     const targetNode = nodes.find(n => n.id === edge.target);
// //     if (!sourceNode || !targetNode) return;

// //     const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
// //     const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
// //     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

// //     const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
// //     const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
    
// //     const possibleConnections = getPossibleConnections(
// //       sourceNode,
// //       targetNode,
// //       edge.sourceHandle,
// //       edge.targetHandle
// //     );

// //     // Check for solid (special or single port)
// //     const isSpecialCase = (
// //       (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
// //       (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
// //     );

// //     if (isSpecialCase || possibleConnections.length === 1) {
// //       const port = isSpecialCase ? (
// //         sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
// //       ) : possibleConnections[0];
      
// //       // Store the exact visual connection: fromBoard-port-toBoard-port
// //       allSolidConnectionPoints.add(`${fromBoardIndex}-${port}-${toBoardIndex}-${port}`);
// //     }

// //     // Also check for manually selected solid connections (from clicked dotted lines)
// //     possibleConnections.forEach(portNumber => {
// //       const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
// //       if (solidConnections.has(key)) {
// //         allSolidConnectionPoints.add(`${fromBoardIndex}-${portNumber}-${toBoardIndex}-${portNumber}`);
// //       }
// //     });
// //   });

// //   // Second pass: generate lines with overlap detection
// //   edges.forEach(edge => {
// //     const sourceNode = nodes.find(n => n.id === edge.source);
// //     const targetNode = nodes.find(n => n.id === edge.target);
// //     if (!sourceNode || !targetNode) return;

// //     const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
// //     const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
// //     const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
// //     const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
    
// //     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

// //     const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;
// //     const possibleConnections = getPossibleConnections(
// //       sourceNode,
// //       targetNode,
// //       edge.sourceHandle,
// //       edge.targetHandle
// //     );

// //     // Check for solid (special or single port)
// //     const isSpecialCase = (
// //       (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
// //       (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
// //     );

// //     if (isSpecialCase || possibleConnections.length === 1) {
// //       const port = isSpecialCase ? (
// //         sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
// //       ) : possibleConnections[0];
      
// //       lines.push({
// //         fromBoardIndex,
// //         toBoardIndex,
// //         fromPort: port,
// //         toPort: port,
// //         style: 'solid',
// //         sourceHandle: edge.sourceHandle,
// //         targetHandle: edge.targetHandle,
// //         edgeId: edge.id,
// //         isSpecificConnection: isSpecialCase
// //       });
// //       solidPortSet.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
// //     } 
// //     else if (isSelectedEdge) {
// //       // First, add any manually selected solid connections
// //       possibleConnections.forEach(portNumber => {
// //         const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
// //         const isSolid = solidConnections.has(key);
// //         if (isSolid) {
// //           lines.push({
// //             fromBoardIndex,
// //             toBoardIndex,
// //             fromPort: portNumber,
// //             toPort: portNumber,
// //             style: 'solid',
// //             sourceHandle: edge.sourceHandle,
// //             targetHandle: edge.targetHandle,
// //             edgeId: edge.id,
// //             clickable: false
// //           });
// //           solidPortSet.add(key);
// //         }
// //       });

// //       // Then add dotted lines, but only if they don't overlap with any solid connection
// //       possibleConnections.forEach(portNumber => {
// //         const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
        
// //         // Check if this exact visual connection overlaps with any solid connection
// //         // We need to check if any solid line passes through the same visual space
// //         let hasVisualOverlap = false;
        
// //         // Check all possible solid connections that might visually overlap
// //         for (const solidConnection of allSolidConnectionPoints) {
// //           const [solidFromBoard, solidFromPort, solidToBoard, solidToPort] = solidConnection.split('-').map(Number);
          
// //           // Visual overlap occurs when:
// //           // 1. Lines cross the same vertical space between boards AND
// //           // 2. They use the same port number (creating visual overlap)
// //           const boardsOverlap = (
// //             (fromBoardIndex <= solidFromBoard && toBoardIndex >= solidToBoard) ||
// //             (fromBoardIndex >= solidFromBoard && toBoardIndex <= solidToBoard) ||
// //             (fromBoardIndex <= solidToBoard && toBoardIndex >= solidFromBoard) ||
// //             (fromBoardIndex >= solidToBoard && toBoardIndex <= solidFromBoard)
// //           );
          
// //           if (boardsOverlap && portNumber === solidFromPort && portNumber === solidToPort) {
// //             hasVisualOverlap = true;
// //             break;
// //           }
// //         }
        
// //         // Only show dotted line if:
// //         // 1. It's not already a solid connection for this edge
// //         // 2. It's not already processed as solid for this edge  
// //         // 3. It doesn't visually overlap with any solid connection
// //         if (!solidConnections.has(key) && !solidPortSet.has(key) && !hasVisualOverlap) {
// //           lines.push({
// //             fromBoardIndex,
// //             toBoardIndex,
// //             fromPort: portNumber,
// //             toPort: portNumber,
// //             style: 'dashed',
// //             sourceHandle: edge.sourceHandle,
// //             targetHandle: edge.targetHandle,
// //             edgeId: edge.id,
// //             clickable: true
// //           });
// //         }
// //       });
// //     }
// //   });

// //   return lines;
// // };

// const getConnectionLines = () => {
//   const lines = [];
//   const solidPortSet = new Set(); // Track solid connections for current processing
//   const allSolidConnectionPoints = new Set(); // Track all solid connection points globally
  
//   if (!edges) return lines;

//   // First pass: collect ALL solid connections to build global solid map
//   edges.forEach(edge => {
//     const sourceNode = nodes.find(n => n.id === edge.source);
//     const targetNode = nodes.find(n => n.id === edge.target);
//     if (!sourceNode || !targetNode) return;

//     const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
//     const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
//     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

//     const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
//     const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
    
//     const possibleConnections = getPossibleConnections(
//       sourceNode,
//       targetNode,
//       edge.sourceHandle,
//       edge.targetHandle
//     );

//     // Check for solid (special or single port)
//     const isSpecialCase = (
//       (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
//       (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
//     );

//     if (isSpecialCase || possibleConnections.length === 1) {
//       const port = isSpecialCase ? (
//         sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
//       ) : possibleConnections[0];
      
//       // FIXED: Store the connection with board pair and port - format: fromBoard-toBoard-port
//       allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
//     }

//     // Also check for manually selected solid connections (from clicked dotted lines)
//     possibleConnections.forEach(portNumber => {
//       const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
//       if (solidConnections.has(key)) {
//         // FIXED: Store with board pair and port
//         allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
//       }
//     });
//   });

//   // Second pass: generate lines with overlap detection
//   edges.forEach(edge => {
//     const sourceNode = nodes.find(n => n.id === edge.source);
//     const targetNode = nodes.find(n => n.id === edge.target);
//     if (!sourceNode || !targetNode) return;

//     const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
//     const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
//     const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
//     const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
    
//     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

//     const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;
//     const possibleConnections = getPossibleConnections(
//       sourceNode,
//       targetNode,
//       edge.sourceHandle,
//       edge.targetHandle
//     );

//     // Check for solid (special or single port)
//     const isSpecialCase = (
//       (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
//       (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
//     );

//     if (isSpecialCase || possibleConnections.length === 1) {
//       const port = isSpecialCase ? (
//         sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
//       ) : possibleConnections[0];
      
//       lines.push({
//         fromBoardIndex,
//         toBoardIndex,
//         fromPort: port,
//         toPort: port,
//         style: 'solid',
//         sourceHandle: edge.sourceHandle,
//         targetHandle: edge.targetHandle,
//         edgeId: edge.id,
//         isSpecificConnection: isSpecialCase
//       });
//       solidPortSet.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
//     } else if (isSelectedEdge) {
//       // First, add any manually selected solid connections
//       possibleConnections.forEach(portNumber => {
//         const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
//         const isSolid = solidConnections.has(key);
//         if (isSolid) {
//           lines.push({
//             fromBoardIndex,
//             toBoardIndex,
//             fromPort: portNumber,
//             toPort: portNumber,
//             style: 'solid',
//             sourceHandle: edge.sourceHandle,
//             targetHandle: edge.targetHandle,
//             edgeId: edge.id,
//             clickable: false
//           });
//           solidPortSet.add(key);
//         }
//       });

//       // Then add dotted lines, but only if they don't overlap with any solid connection
//       possibleConnections.forEach(portNumber => {
//         const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
        
//         // FIXED: Check for overlap more precisely
//         // Check if there's a solid connection using the same port on the same board pair
//         const hasDirectOverlap = allSolidConnectionPoints.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
        
//         // FIXED: Also check for any solid connections that would visually overlap
//         // This includes connections that cross through the same visual space
//         let hasVisualOverlap = false;
//         for (const solidConnection of allSolidConnectionPoints) {
//           const [solidFromBoard, solidToBoard, solidPort] = solidConnection.split('-').map(Number);
          
//           // Check if solid line crosses through our board pair on the same port
//           if (solidPort === portNumber) {
//             // Case 1: Direct board pair match
//             if ((solidFromBoard === fromBoardIndex && solidToBoard === toBoardIndex) ||
//                 (solidFromBoard === toBoardIndex && solidToBoard === fromBoardIndex)) {
//               hasVisualOverlap = true;
//               break;
//             }
            
//             // Case 2: Lines that cross through the same visual space
//             // If solid line spans across our board pair, it creates visual overlap
//             const solidSpansOurConnection = (
//               (solidFromBoard < fromBoardIndex && solidToBoard > toBoardIndex) ||
//               (solidFromBoard > fromBoardIndex && solidToBoard < toBoardIndex) ||
//               (solidFromBoard < toBoardIndex && solidToBoard > fromBoardIndex) ||
//               (solidFromBoard > toBoardIndex && solidToBoard < fromBoardIndex)
//             );
            
//             if (solidSpansOurConnection) {
//               hasVisualOverlap = true;
//               break;
//             }
//           }
//         }
        
//         // Only show dotted line if:
//         // 1. It's not already a solid connection for this edge
//         // 2. It's not already processed as solid for this edge  
//         // 3. No direct or visual overlap with solid connections
//         if (!solidConnections.has(key) && !solidPortSet.has(key) && !hasDirectOverlap && !hasVisualOverlap) {
//           lines.push({
//             fromBoardIndex,
//             toBoardIndex,
//             fromPort: portNumber,
//             toPort: portNumber,
//             style: 'dashed',
//             sourceHandle: edge.sourceHandle,
//             targetHandle: edge.targetHandle,
//             edgeId: edge.id,
//             clickable: true
//           });
//         }
//       });
//     }
//   });

//   return lines;
// };


//   const getConnectedPorts = () => {
//     const connectedPorts = new Set();
//     const lines = getConnectionLines();
    
//     lines.forEach(line => {
//       connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
//       connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
//     });
    
//     return connectedPorts;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const connectedPorts = getConnectedPorts();
//     const pins = [];
    
//     for (let i = 0; i < count; i++) {
//       const portKey = `${boardIndex}-${type}-${i}`;
//       const isConnected = connectedPorts.has(portKey);
      
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Calculate port position
//   const getPortPosition = (boardIndex, portIndex, type) => {
//      const boardSpacing = 110;
//     const boardTopPadding = 8;
//     const boardBorderPadding = 12;
//     const pinRowHeight = 5;
    
//     // Add these offsets to move lines
//     const X_OFFSET = 9; // Move right
//     const Y_OFFSET = 28; // Move down
    
//     // Y position with offset
//     const containerY = boardIndex * boardSpacing + boardTopPadding + Y_OFFSET;
//     const boardY = containerY + boardBorderPadding;
//     const portY = type === 'input' ? boardY : boardY + pinRowHeight;
    
//     // X position with offset
//     const pinWidth = 20;
//     const boardStartX = 8 + boardBorderPadding + X_OFFSET; // Add X offset here
//     const portX = boardStartX + (portIndex * pinWidth) + 10;
    
//     return { x: portX, y: portY };
//   };

//   // Render connection lines with click functionality
//   // const renderConnectionLines = () => {
//   //   const lines = getConnectionLines();
    
//   //   return lines.map((line, index) => {
//   //     // Get positions for source and target ports
//   //     const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//   //     const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
//   //     return (
//   //       <line
//   //         key={`connection-${index}`}
//   //         x1={sourcePos.x}
//   //         y1={sourcePos.y}
//   //         x2={targetPos.x}
//   //         y2={targetPos.y}
//   //         stroke="#666"
//   //         strokeWidth="1.5"
//   //         strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//   //         opacity="0.7"
//   //         style={{
//   //           cursor: line.clickable ? 'pointer' : 'default',
//   //           pointerEvents: line.clickable ? 'all' : 'none'
//   //         }}
//   //         onClick={line.clickable ? () => handleDottedLineClick(
//   //           line.fromBoardIndex, 
//   //           line.toBoardIndex, 
//   //           line.fromPort, 
//   //           line.edgeId
//   //         ) : undefined}
//   //       />
//   //     );
//   //   });
//   // };
// // Render connection lines with click functionality
// const renderConnectionLines = () => {
//   const lines = getConnectionLines();
  
//   return lines.map((line, index) => {
//     // Get positions for source and target ports
//     const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//     const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
    
//     return (
//       <g key={`connection-${index}`}>
//         {/* Invisible thick line for easier clicking */}
//         {line.clickable && (
//           <line
//             x1={sourcePos.x}
//             y1={sourcePos.y}
//             x2={targetPos.x}
//             y2={targetPos.y}
//             stroke="transparent"
//             strokeWidth="12" // Much thicker for easier clicking
//             style={{
//               cursor: 'pointer',
//               pointerEvents: 'all'
//             }}
//             onClick={() => handleDottedLineClick(
//               line.fromBoardIndex, 
//               line.toBoardIndex, 
//               line.fromPort, 
//               line.edgeId
//             )}
//           />
//         )}
        
//         {/* Visible line (original appearance) */}
//         <line
//           x1={sourcePos.x}
//           y1={sourcePos.y}
//           x2={targetPos.x}
//           y2={targetPos.y}
//           stroke="#666"
//           strokeWidth="1.5"
//           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//           opacity="0.7"
//           style={{
//             cursor: line.clickable ? 'pointer' : 'default',
//             pointerEvents: 'none' // Let the thick invisible line handle clicks
//           }}
//         />
//       </g>
//     );
//   });
// };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 10,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;
// still2
// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edges, PORT_RULES, selectedEdge, onEdgeUpdate }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes || []);
//   const [solidConnections, setSolidConnections] = useState(new Set()); // Track solid connections

//   // Update local state when prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes || []);
//   }, [nodes]);

//   // Get connections between two nodes
//   const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
//     if (!edges) return [];
//     return edges.filter(edge => 
//       edge.source === sourceNodeId && edge.target === targetNodeId
//     );
//   };

//   // Get possible port connections based on PORT_RULES
//   const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
//     const sourceLabel = sourceNode.data.label;
//     const targetLabel = targetNode.data.label;
    
//     const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
//     const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
//     let sourcePossible = [];
//     let targetPossible = [];
    
//     // Get possible connections from source port
//     if (sourceRule?.allow) {
//       sourcePossible = sourceRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       sourcePossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Get possible connections from target port
//     if (targetRule?.allow) {
//       targetPossible = targetRule.allow;
//     } else {
//       // Default to all ports 0-15 if no specific rule
//       targetPossible = Array.from({length: 16}, (_, i) => i);
//     }
    
//     // Find common possible connections
//     const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
//     return commonPorts;
//   };

//   // Check if a specific port connection is already solid
//   const isSolidConnection = (fromBoardIndex, toBoardIndex, portNumber) => {
//     return solidConnections.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
//   };

//   // Handle clicking on a dotted line to make it solid
//   const handleDottedLineClick = (fromBoardIndex, toBoardIndex, portNumber, edgeId) => {
//     const connectionKey = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
//     setSolidConnections(prev => new Set([...prev, connectionKey]));
    
//     // Optional: Call parent component to update edge data
//     if (onEdgeUpdate) {
//       onEdgeUpdate(edgeId, { solidPort: portNumber });
//     }
//   };

//   // Get all connected ports for styling
//   const getConnectionLines = () => {
//     const lines = [];
//     const solidPortSet = new Set(); // Track solid connections for current processing
//     const allSolidConnectionPoints = new Set(); // Track all solid connection points globally
    
//     if (!edges) return lines;

//     // First pass: collect ALL solid connections to build global solid map
//     edges.forEach(edge => {
//       const sourceNode = nodes.find(n => n.id === edge.source);
//       const targetNode = nodes.find(n => n.id === edge.target);
//       if (!sourceNode || !targetNode) return;

//       const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
//       const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
//       if (fromBoardIndex === -1 || toBoardIndex === -1) return;

//       const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
//       const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
      
//       const possibleConnections = getPossibleConnections(
//         sourceNode,
//         targetNode,
//         edge.sourceHandle,
//         edge.targetHandle
//       );

//       // Check for solid (special or single port)
//       const isSpecialCase = (
//         (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
//         (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
//       );

//       if (isSpecialCase || possibleConnections.length === 1) {
//         const port = isSpecialCase ? (
//           sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
//         ) : possibleConnections[0];
        
//         // Store the connection with board pair and port - format: fromBoard-toBoard-port
//         allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
//       }

//       // Also check for manually selected solid connections (from clicked dotted lines)
//       possibleConnections.forEach(portNumber => {
//         const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
//         if (solidConnections.has(key)) {
//           // Store with board pair and port
//           allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
//         }
//       });
//     });

//     // Second pass: generate lines with overlap detection
//     edges.forEach(edge => {
//       const sourceNode = nodes.find(n => n.id === edge.source);
//       const targetNode = nodes.find(n => n.id === edge.target);
//       if (!sourceNode || !targetNode) return;

//       const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
//       const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
//       const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
//       const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
      
//       if (fromBoardIndex === -1 || toBoardIndex === -1) return;

//       const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;
//       const possibleConnections = getPossibleConnections(
//         sourceNode,
//         targetNode,
//         edge.sourceHandle,
//         edge.targetHandle
//       );

//       // Check for solid (special or single port)
//       const isSpecialCase = (
//         (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
//         (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
//       );

//       if (isSpecialCase || possibleConnections.length === 1) {
//         const port = isSpecialCase ? (
//           sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
//         ) : possibleConnections[0];
        
//         lines.push({
//           fromBoardIndex,
//           toBoardIndex,
//           fromPort: port,
//           toPort: port,
//           style: 'solid',
//           sourceHandle: edge.sourceHandle,
//           targetHandle: edge.targetHandle,
//           edgeId: edge.id,
//           isSpecificConnection: isSpecialCase
//         });
//         solidPortSet.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
//       } else if (isSelectedEdge) {
//         // First, add any manually selected solid connections and track if this edge has any solid connections
//         let hasAnySolidConnection = false;
        
//         possibleConnections.forEach(portNumber => {
//           const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
//           const isSolid = solidConnections.has(key);
//           if (isSolid) {
//             lines.push({
//               fromBoardIndex,
//               toBoardIndex,
//               fromPort: portNumber,
//               toPort: portNumber,
//               style: 'solid',
//               sourceHandle: edge.sourceHandle,
//               targetHandle: edge.targetHandle,
//               edgeId: edge.id,
//               clickable: false
//             });
//             solidPortSet.add(key);
//             hasAnySolidConnection = true; // Mark that this edge has a solid connection
//           }
//         });

//         // Then add dotted lines, but ONLY if no solid connection exists for this edge
//         if (!hasAnySolidConnection) {
//           possibleConnections.forEach(portNumber => {
//             const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
            
//             // Check for overlap more precisely
//             // Check if there's a solid connection using the same port on the same board pair
//             const hasDirectOverlap = allSolidConnectionPoints.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
            
//             // Also check for any solid connections that would visually overlap
//             // This includes connections that cross through the same visual space
//             let hasVisualOverlap = false;
//             for (const solidConnection of allSolidConnectionPoints) {
//               const [solidFromBoard, solidToBoard, solidPort] = solidConnection.split('-').map(Number);
              
//               // Check if solid line crosses through our board pair on the same port
//               if (solidPort === portNumber) {
//                 // Case 1: Direct board pair match
//                 if ((solidFromBoard === fromBoardIndex && solidToBoard === toBoardIndex) ||
//                     (solidFromBoard === toBoardIndex && solidToBoard === fromBoardIndex)) {
//                   hasVisualOverlap = true;
//                   break;
//                 }
                
//                 // Case 2: Lines that cross through the same visual space
//                 // If solid line spans across our board pair, it creates visual overlap
//                 const solidSpansOurConnection = (
//                   (solidFromBoard < fromBoardIndex && solidToBoard > toBoardIndex) ||
//                   (solidFromBoard > fromBoardIndex && solidToBoard < toBoardIndex) ||
//                   (solidFromBoard < toBoardIndex && solidToBoard > fromBoardIndex) ||
//                   (solidFromBoard > toBoardIndex && solidToBoard < fromBoardIndex)
//                 );
                
//                 if (solidSpansOurConnection) {
//                   hasVisualOverlap = true;
//                   break;
//                 }
//               }
//             }
            
//             // Only show dotted line if:
//             // 1. It's not already a solid connection for this edge
//             // 2. It's not already processed as solid for this edge  
//             // 3. No direct or visual overlap with solid connections
//             if (!solidConnections.has(key) && !solidPortSet.has(key) && !hasDirectOverlap && !hasVisualOverlap) {
//               lines.push({
//                 fromBoardIndex,
//                 toBoardIndex,
//                 fromPort: portNumber,
//                 toPort: portNumber,
//                 style: 'dashed',
//                 sourceHandle: edge.sourceHandle,
//                 targetHandle: edge.targetHandle,
//                 edgeId: edge.id,
//                 clickable: true
//               });
//             }
//           });
//         }
//       }
//     });

//     return lines;
//   };

//   const getConnectedPorts = () => {
//     const connectedPorts = new Set();
//     const lines = getConnectionLines();
    
//     lines.forEach(line => {
//       connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
//       connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
//     });
    
//     return connectedPorts;
//   };

//   const renderPins = (type, count, boardIndex) => {
//     const connectedPorts = getConnectedPorts();
//     const pins = [];
    
//     for (let i = 0; i < count; i++) {
//       const portKey = `${boardIndex}-${type}-${i}`;
//       const isConnected = connectedPorts.has(portKey);
      
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
//               margin: '2px auto',
//             }}
//             data-board={boardIndex}
//             data-port={i}
//             data-type={type}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();

//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

//     if (dragIndex === dropIndex) return;

//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);

//     setOrderedNodes(updatedNodes);
//   };

//   // Fixed port position calculation to match the actual layout
//   const getPortPosition = (boardIndex, portIndex, type) => {
//     // Board container dimensions and spacing
//     const boardContainerHeight = 115; // Height between board containers
//     const containerStartY = 18; // Starting Y position (accounting for padding)
    
//     // Calculate board position
//     const boardY = containerStartY + (boardIndex * boardContainerHeight);
    
//     // Pin row positions within each board (relative to board top)
//     const inputRowOffset = 22; // Distance from board top to input pins
//     const outputRowOffset = 42; // Distance from board top to output pins
    
//     const portY = type === 'input' ? boardY + inputRowOffset : boardY + outputRowOffset;
    
//     // X calculation - pins are evenly spaced within the 320px board width
//     const boardStartX = 30; // Board left padding + container padding
//     const pinSpacing = 20; // 320px / 16 pins = 20px per pin
//     const pinCenterOffset = 10; // Center the pin within its 20px space
//     const portX = boardStartX + (portIndex * pinSpacing) + pinCenterOffset;
    
//     return { x: portX, y: portY };
//   };

//   // Render connection lines with click functionality
//   const renderConnectionLines = () => {
//     const lines = getConnectionLines();
    
//     return lines.map((line, index) => {
//       // Get positions for source and target ports
//       const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
//       const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
//       return (
//         <g key={`connection-${index}`}>
//           {/* Invisible thick line for easier clicking */}
//           {line.clickable && (
//             <line
//               x1={sourcePos.x}
//               y1={sourcePos.y}
//               x2={targetPos.x}
//               y2={targetPos.y}
//               stroke="transparent"
//               strokeWidth="12" // Much thicker for easier clicking
//               style={{
//                 cursor: 'pointer',
//                 pointerEvents: 'all'
//               }}
//               onClick={() => handleDottedLineClick(
//                 line.fromBoardIndex, 
//                 line.toBoardIndex, 
//                 line.fromPort, 
//                 line.edgeId
//               )}
//             />
//           )}
          
//           {/* Visible line (original appearance) */}
//           <line
//             x1={sourcePos.x}
//             y1={sourcePos.y}
//             x2={targetPos.x}
//             y2={targetPos.y}
//             stroke="#666"
//             strokeWidth="1.5"
//             strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
//             opacity="0.7"
//             style={{
//               cursor: line.clickable ? 'pointer' : 'default',
//               pointerEvents: 'none' // Let the thick invisible line handle clicks
//             }}
//           />
//         </g>
//       );
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//         position: 'relative',
//       }}
//     >
//       {/* SVG overlay for connection lines */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 10,
//         }}
//       >
//         {renderConnectionLines()}
//       </svg>

//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         <div style={{ position: 'relative', zIndex: 2 }}>
//           {orderedNodes.map((node, index) => (
//             <div
//               key={node.id}
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, index)}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//               }}
//             >
//               {/* Bordered Board Container with Label */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, index)}</div>
//                     <div>{renderPins('output', 16, index)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name with connector line */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginLeft: '4px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       marginLeft: '5px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small style={{ fontSize: '12px', color: '#666' }}>
//                       {node.data.label}
//                     </small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;

import React, { useState, useEffect } from 'react';

const BoardConfigPanel = ({ nodes, edges, PORT_RULES, selectedEdge, onEdgeUpdate }) => {
  const [orderedNodes, setOrderedNodes] = useState(nodes || []);
  const [solidConnections, setSolidConnections] = useState(new Set()); // Track solid connections

  // Update local state when prop changes
  useEffect(() => {
    setOrderedNodes(nodes || []);
  }, [nodes]);

  // Get connections between two nodes
  const getConnectionsBetweenNodes = (sourceNodeId, targetNodeId) => {
    if (!edges) return [];
    return edges.filter(edge => 
      edge.source === sourceNodeId && edge.target === targetNodeId
    );
  };

  // Get possible port connections based on PORT_RULES
  const getPossibleConnections = (sourceNode, targetNode, sourcePort, targetPort) => {
    const sourceLabel = sourceNode.data.label;
    const targetLabel = targetNode.data.label;
    
    const sourceRule = PORT_RULES?.[sourceLabel]?.[sourcePort];
    const targetRule = PORT_RULES?.[targetLabel]?.[targetPort];
    
    let sourcePossible = [];
    let targetPossible = [];
    
    // Get possible connections from source port
    if (sourceRule?.allow) {
      sourcePossible = sourceRule.allow;
    } else {
      // Default to all ports 0-15 if no specific rule
      sourcePossible = Array.from({length: 16}, (_, i) => i);
    }
    
    // Get possible connections from target port
    if (targetRule?.allow) {
      targetPossible = targetRule.allow;
    } else {
      // Default to all ports 0-15 if no specific rule
      targetPossible = Array.from({length: 16}, (_, i) => i);
    }
    
    // Find common possible connections
    const commonPorts = sourcePossible.filter(port => targetPossible.includes(port));
    return commonPorts;
  };

  // Check if a specific port connection is already solid
  const isSolidConnection = (fromBoardIndex, toBoardIndex, portNumber) => {
    return solidConnections.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
  };

  // Handle clicking on a dotted line to make it solid
  const handleDottedLineClick = (fromBoardIndex, toBoardIndex, portNumber, edgeId) => {
    const connectionKey = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
    setSolidConnections(prev => new Set([...prev, connectionKey]));
    
    // Optional: Call parent component to update edge data
    if (onEdgeUpdate) {
      onEdgeUpdate(edgeId, { solidPort: portNumber });
    }
  };

  // Get all connected ports for styling
  // const getConnectionLines = () => {
  //   const lines = [];
  //   const solidPortSet = new Set(); // Track solid connections for current processing
  //   const allSolidConnectionPoints = new Set(); // Track all solid connection points globally
    
  //   if (!edges) return lines;

  //   // First pass: collect ALL solid connections to build global solid map
  //   edges.forEach(edge => {
  //     const sourceNode = nodes.find(n => n.id === edge.source);
  //     const targetNode = nodes.find(n => n.id === edge.target);
  //     if (!sourceNode || !targetNode) return;

  //     const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
  //     const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
  //     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

  //     const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
  //     const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
      
  //     const possibleConnections = getPossibleConnections(
  //       sourceNode,
  //       targetNode,
  //       edge.sourceHandle,
  //       edge.targetHandle
  //     );

  //     // Check for solid (special or single port)
  //     const isSpecialCase = (
  //       (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
  //       (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
  //     );

  //     if (isSpecialCase || possibleConnections.length === 1) {
  //       const port = isSpecialCase ? (
  //         sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
  //       ) : possibleConnections[0];
        
  //       // Store the connection with board pair and port - format: fromBoard-toBoard-port
  //       allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
  //     }

  //     // Also check for manually selected solid connections (from clicked dotted lines)
  //     possibleConnections.forEach(portNumber => {
  //       const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
  //       if (solidConnections.has(key)) {
  //         // Store with board pair and port
  //         allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
  //       }
  //     });
  //   });

  //   // Second pass: generate lines with overlap detection
  //   edges.forEach(edge => {
  //     const sourceNode = nodes.find(n => n.id === edge.source);
  //     const targetNode = nodes.find(n => n.id === edge.target);
  //     if (!sourceNode || !targetNode) return;

  //     const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
  //     const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
  //     const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
  //     const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
      
  //     if (fromBoardIndex === -1 || toBoardIndex === -1) return;

  //     const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;
  //     const possibleConnections = getPossibleConnections(
  //       sourceNode,
  //       targetNode,
  //       edge.sourceHandle,
  //       edge.targetHandle
  //     );

  //     // Check for solid (special or single port)
  //     const isSpecialCase = (
  //       (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
  //       (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
  //     );

  //     if (isSpecialCase || possibleConnections.length === 1) {
  //       const port = isSpecialCase ? (
  //         sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
  //       ) : possibleConnections[0];
        
  //       lines.push({
  //         fromBoardIndex,
  //         toBoardIndex,
  //         fromPort: port,
  //         toPort: port,
  //         style: 'solid',
  //         sourceHandle: edge.sourceHandle,
  //         targetHandle: edge.targetHandle,
  //         edgeId: edge.id,
  //         isSpecificConnection: isSpecialCase
  //       });
  //       solidPortSet.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
  //     } else if (isSelectedEdge) {
  //       // First, add any manually selected solid connections and track if this edge has any solid connections
  //       let hasAnySolidConnection = false;
        
  //       possibleConnections.forEach(portNumber => {
  //         const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
  //         const isSolid = solidConnections.has(key);
  //         if (isSolid) {
  //           lines.push({
  //             fromBoardIndex,
  //             toBoardIndex,
  //             fromPort: portNumber,
  //             toPort: portNumber,
  //             style: 'solid',
  //             sourceHandle: edge.sourceHandle,
  //             targetHandle: edge.targetHandle,
  //             edgeId: edge.id,
  //             clickable: false
  //           });
  //           solidPortSet.add(key);
  //           hasAnySolidConnection = true; // Mark that this edge has a solid connection
  //         }
  //       });

  //       // Then add dotted lines, but ONLY if no solid connection exists for this edge
  //       if (!hasAnySolidConnection) {
  //         possibleConnections.forEach(portNumber => {
  //           const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
            
  //           // Check for overlap more precisely
  //           // Check if there's a solid connection using the same port on the same board pair
  //           const hasDirectOverlap = allSolidConnectionPoints.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
            
  //           // Also check for any solid connections that would visually overlap
  //           // This includes connections that cross through the same visual space
  //           let hasVisualOverlap = false;
  //           for (const solidConnection of allSolidConnectionPoints) {
  //             const [solidFromBoard, solidToBoard, solidPort] = solidConnection.split('-').map(Number);
              
  //             // Check if solid line crosses through our board pair on the same port
  //             if (solidPort === portNumber) {
  //               // Case 1: Direct board pair match
  //               if ((solidFromBoard === fromBoardIndex && solidToBoard === toBoardIndex) ||
  //                   (solidFromBoard === toBoardIndex && solidToBoard === fromBoardIndex)) {
  //                 hasVisualOverlap = true;
  //                 break;
  //               }
                
  //               // Case 2: Lines that cross through the same visual space
  //               // If solid line spans across our board pair, it creates visual overlap
  //               const solidSpansOurConnection = (
  //                 (solidFromBoard < fromBoardIndex && solidToBoard > toBoardIndex) ||
  //                 (solidFromBoard > fromBoardIndex && solidToBoard < toBoardIndex) ||
  //                 (solidFromBoard < toBoardIndex && solidToBoard > fromBoardIndex) ||
  //                 (solidFromBoard > toBoardIndex && solidToBoard < fromBoardIndex)
  //               );
                
  //               if (solidSpansOurConnection) {
  //                 hasVisualOverlap = true;
  //                 break;
  //               }
  //             }
  //           }
            
  //           // Only show dotted line if:
  //           // 1. It's not already a solid connection for this edge
  //           // 2. It's not already processed as solid for this edge  
  //           // 3. No direct or visual overlap with solid connections
  //           if (!solidConnections.has(key) && !solidPortSet.has(key) && !hasDirectOverlap && !hasVisualOverlap) {
  //             lines.push({
  //               fromBoardIndex,
  //               toBoardIndex,
  //               fromPort: portNumber,
  //               toPort: portNumber,
  //               style: 'dashed',
  //               sourceHandle: edge.sourceHandle,
  //               targetHandle: edge.targetHandle,
  //               edgeId: edge.id,
  //               clickable: true
  //             });
  //           }
  //         });
  //       }
  //     }
  //   });

  //   return lines;
  // };
  // Replace your existing getConnectionLines function with this fixed version:

const getConnectionLines = () => {
  const lines = [];
  const solidPortSet = new Set(); // Track solid connections for current processing
  const allSolidConnectionPoints = new Set(); // Track all solid connection points globally
  
  if (!edges) return lines;

  // First pass: collect ALL solid connections to build global solid map
  edges.forEach(edge => {
    const sourceNode = nodes.find(n => n.id === edge.source);
    const targetNode = nodes.find(n => n.id === edge.target);
    if (!sourceNode || !targetNode) return;

    const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
    const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
    if (fromBoardIndex === -1 || toBoardIndex === -1) return;

    const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
    const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
    
    const possibleConnections = getPossibleConnections(
      sourceNode,
      targetNode,
      edge.sourceHandle,
      edge.targetHandle
    );

    // Check for solid (special or single port)
    const isSpecialCase = (
      (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
      (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
    );

    if (isSpecialCase || possibleConnections.length === 1) {
      const port = isSpecialCase ? (
        sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
      ) : possibleConnections[0];
      
      // Store the connection with board pair and port - format: fromBoard-toBoard-port
      allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
    }

    // Also check for manually selected solid connections (from clicked dotted lines)
    possibleConnections.forEach(portNumber => {
      const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
      if (solidConnections.has(key)) {
        // Store with board pair and port
        allSolidConnectionPoints.add(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
      }
    });
  });

  // Second pass: generate lines with overlap detection
  edges.forEach(edge => {
    const sourceNode = nodes.find(n => n.id === edge.source);
    const targetNode = nodes.find(n => n.id === edge.target);
    if (!sourceNode || !targetNode) return;

    const sourcePortNumber = parseInt(edge.sourceHandle.split('-')[1], 10);
    const targetPortNumber = parseInt(edge.targetHandle.split('-')[1], 10);
    const fromBoardIndex = orderedNodes.findIndex(n => n.id === edge.source);
    const toBoardIndex = orderedNodes.findIndex(n => n.id === edge.target);
    
    if (fromBoardIndex === -1 || toBoardIndex === -1) return;

    const isSelectedEdge = selectedEdge && selectedEdge.id === edge.id;
    const possibleConnections = getPossibleConnections(
      sourceNode,
      targetNode,
      edge.sourceHandle,
      edge.targetHandle
    );

    // Check for solid (special or single port)
    const isSpecialCase = (
      (sourceNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left')) ||
      (targetNode.data.label === 'D.PSOC4' && edge.sourceHandle.startsWith('right') && edge.targetHandle.startsWith('left'))
    );

    // ALWAYS show solid connections (special cases and single ports)
    if (isSpecialCase || possibleConnections.length === 1) {
      const port = isSpecialCase ? (
        sourceNode.data.label === 'D.PSOC4' ? sourcePortNumber : targetPortNumber
      ) : possibleConnections[0];
      
      lines.push({
        fromBoardIndex,
        toBoardIndex,
        fromPort: port,
        toPort: port,
        style: 'solid',
        sourceHandle: edge.sourceHandle,
        targetHandle: edge.targetHandle,
        edgeId: edge.id,
        isSpecificConnection: isSpecialCase
      });
      solidPortSet.add(`${fromBoardIndex}-${toBoardIndex}-${port}`);
    } 
    // ALWAYS show manually selected solid connections (clicked dotted lines)
    else {
      // First, add any manually selected solid connections
      let hasAnySolidConnection = false;
      
      possibleConnections.forEach(portNumber => {
        const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
        const isSolid = solidConnections.has(key);
        if (isSolid) {
          lines.push({
            fromBoardIndex,
            toBoardIndex,
            fromPort: portNumber,
            toPort: portNumber,
            style: 'solid',
            sourceHandle: edge.sourceHandle,
            targetHandle: edge.targetHandle,
            edgeId: edge.id,
            clickable: false
          });
          solidPortSet.add(key);
          hasAnySolidConnection = true;
        }
      });

      // Then add dotted lines ONLY if this is the selected edge AND no solid connection exists for this edge
      if (isSelectedEdge && !hasAnySolidConnection) {
        possibleConnections.forEach(portNumber => {
          const key = `${fromBoardIndex}-${toBoardIndex}-${portNumber}`;
          
          // Check for overlap more precisely
          const hasDirectOverlap = allSolidConnectionPoints.has(`${fromBoardIndex}-${toBoardIndex}-${portNumber}`);
          
          // Also check for any solid connections that would visually overlap
          let hasVisualOverlap = false;
          for (const solidConnection of allSolidConnectionPoints) {
            const [solidFromBoard, solidToBoard, solidPort] = solidConnection.split('-').map(Number);
            
            if (solidPort === portNumber) {
              // Case 1: Direct board pair match
              if ((solidFromBoard === fromBoardIndex && solidToBoard === toBoardIndex) ||
                  (solidFromBoard === toBoardIndex && solidToBoard === fromBoardIndex)) {
                hasVisualOverlap = true;
                break;
              }
              
              // Case 2: Lines that cross through the same visual space
              const solidSpansOurConnection = (
                (solidFromBoard < fromBoardIndex && solidToBoard > toBoardIndex) ||
                (solidFromBoard > fromBoardIndex && solidToBoard < toBoardIndex) ||
                (solidFromBoard < toBoardIndex && solidToBoard > fromBoardIndex) ||
                (solidFromBoard > toBoardIndex && solidToBoard < fromBoardIndex)
              );
              
              if (solidSpansOurConnection) {
                hasVisualOverlap = true;
                break;
              }
            }
          }
          
          // Only show dotted line if no overlaps
          if (!solidConnections.has(key) && !solidPortSet.has(key) && !hasDirectOverlap && !hasVisualOverlap) {
            lines.push({
              fromBoardIndex,
              toBoardIndex,
              fromPort: portNumber,
              toPort: portNumber,
              style: 'dashed',
              sourceHandle: edge.sourceHandle,
              targetHandle: edge.targetHandle,
              edgeId: edge.id,
              clickable: true
            });
          }
        });
      }
    }
  });

  return lines;
};

  const getConnectedPorts = () => {
    const connectedPorts = new Set();
    const lines = getConnectionLines();
    
    lines.forEach(line => {
      connectedPorts.add(`${line.fromBoardIndex}-output-${line.fromPort}`);
      connectedPorts.add(`${line.toBoardIndex}-input-${line.toPort}`);
    });
    
    return connectedPorts;
  };

  const renderPins = (type, count, boardIndex) => {
    const connectedPorts = getConnectedPorts();
    const pins = [];
    
    for (let i = 0; i < count; i++) {
      const portKey = `${boardIndex}-${type}-${i}`;
      const isConnected = connectedPorts.has(portKey);
      
      pins.push(
        <div
          key={`${type}-${i}`}
          style={{
            display: 'inline-block',
            width: '20px',
            textAlign: 'center',
            verticalAlign: 'top',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
              backgroundColor: isConnected ? (type === 'input' ? 'red' : 'green') : 'transparent',
              margin: '2px auto',
            }}
            data-board={boardIndex}
            data-port={i}
            data-type={type}
          />
        </div>
      );
    }

    return (
      <div
        style={{
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          padding: '4px 0',
          maxWidth: '320px',
        }}
      >
        {pins}
      </div>
    );
  };

  // Handle drag start
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  // Allow drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

    if (dragIndex === dropIndex) return;

    const updatedNodes = [...orderedNodes];
    const [movedItem] = updatedNodes.splice(dragIndex, 1);
    updatedNodes.splice(dropIndex, 0, movedItem);

    setOrderedNodes(updatedNodes);
  };

  // Fixed port position calculation to match the actual layout
  // const getPortPosition = (boardIndex, portIndex, type) => {
  //   // Board container dimensions and spacing
  //   const boardContainerHeight = 110; // Height between board containers
  //   const containerStartY = 18; // Starting Y position (accounting for padding)
    
  //   // Calculate board position
  //   const boardY = containerStartY + (boardIndex * boardContainerHeight);
    
  //   // Pin row positions within each board (relative to board top)
  //   const inputRowOffset = 22; // Distance from board top to input pins
  //   const outputRowOffset = 42; // Distance from board top to output pins
    
  //   const portY = type === 'input' ? boardY + inputRowOffset : boardY + outputRowOffset;
    
  //   // X calculation - pins are evenly spaced within the 320px board width
  //   const boardStartX = 30; // Board left padding + container padding
  //   const pinSpacing = 20; // 320px / 16 pins = 20px per pin
  //   const pinCenterOffset = 10; // Center the pin within its 20px space
  //   const portX = boardStartX + (portIndex * pinSpacing) + pinCenterOffset;
    
  //   return { x: portX, y: portY };
  // };
  const getPortPosition = (boardIndex, portIndex, type, verticalOffset = 0) => {
  // Board container dimensions and spacing
  const boardContainerHeight = 115; // Height between board containers
  const containerStartY = 18; // Starting Y position (accounting for padding)
  
  // Calculate board position
  const boardY = containerStartY + (boardIndex * boardContainerHeight);
  
  // Pin row positions within each board (relative to board top)
  const inputRowOffset = 22; // Distance from board top to input pins
  const outputRowOffset = 42; // Distance from board top to output pins
  
  const portY = type === 'input' ? boardY + inputRowOffset : boardY + outputRowOffset;
  
  // X calculation - pins are evenly spaced within the 320px board width
  const boardStartX = 30; // Board left padding + container padding
  const pinSpacing = 20; // 320px / 16 pins = 20px per pin
  const pinCenterOffset = 10; // Center the pin within its 20px space
  const portX = boardStartX + (portIndex * pinSpacing) + pinCenterOffset;
  
  return { x: portX, y: portY + verticalOffset }; // Add vertical offset here
};

  // Render connection lines with click functionality
  // const renderConnectionLines = () => {
  //   const lines = getConnectionLines();
    
  //   return lines.map((line, index) => {
  //     // Get positions for source and target ports
  //     const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output');
  //     const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input');
      
  //     return (
  //       <g key={`connection-${index}`}>
  //         {/* Invisible thick line for easier clicking */}
  //         {line.clickable && (
  //           <line
  //             x1={sourcePos.x}
  //             y1={sourcePos.y}
  //             x2={targetPos.x}
  //             y2={targetPos.y}
  //             stroke="transparent"
  //             strokeWidth="12" // Much thicker for easier clicking
  //             style={{
  //               cursor: 'pointer',
  //               pointerEvents: 'all'
  //             }}
  //             onClick={() => handleDottedLineClick(
  //               line.fromBoardIndex, 
  //               line.toBoardIndex, 
  //               line.fromPort, 
  //               line.edgeId
  //             )}
  //           />
  //         )}
          
  //         {/* Visible line (original appearance) */}
  //         <line
  //           x1={sourcePos.x}
  //           y1={sourcePos.y}
  //           x2={targetPos.x}
  //           y2={targetPos.y}
  //           stroke="#666"
  //           strokeWidth="1.5"
  //           strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
  //           opacity="0.7"
  //           style={{
  //             cursor: line.clickable ? 'pointer' : 'default',
  //             pointerEvents: 'none' // Let the thick invisible line handle clicks
  //           }}
  //         />
  //       </g>
  //     );
  //   });
  // };
const renderConnectionLines = () => {
  const lines = getConnectionLines();
  
  // Group lines by port pairs to calculate offsets
  const linesByPortPair = {};
  lines.forEach((line, index) => {
    const key = `${line.fromBoardIndex}-${line.fromPort}-${line.toBoardIndex}-${line.toPort}`;
    if (!linesByPortPair[key]) {
      linesByPortPair[key] = [];
    }
    linesByPortPair[key].push({ ...line, originalIndex: index });
  });
  
  return lines.map((line, index) => {
    // Calculate vertical offset for this line
    const portPairKey = `${line.fromBoardIndex}-${line.fromPort}-${line.toBoardIndex}-${line.toPort}`;
    const samePortLines = linesByPortPair[portPairKey];
    const lineIndexInGroup = samePortLines.findIndex(l => l.originalIndex === index);
    
    // Create vertical spacing between multiple lines on same port
    const baseOffset = 0;
    const offsetIncrement = 3; // pixels between stacked lines
    const verticalOffset = baseOffset + (lineIndexInGroup * offsetIncrement);
    
    // Get positions for source and target ports with offset
    const sourcePos = getPortPosition(line.fromBoardIndex, line.fromPort, 'output', verticalOffset);
    const targetPos = getPortPosition(line.toBoardIndex, line.toPort, 'input', verticalOffset);
    
    return (
      <g key={`connection-${index}`}>
        {/* Invisible thick line for easier clicking */}
        {line.clickable && (
          <line
            x1={sourcePos.x}
            y1={sourcePos.y}
            x2={targetPos.x}
            y2={targetPos.y}
            stroke="transparent"
            strokeWidth="12" // Much thicker for easier clicking
            style={{
              cursor: 'pointer',
              pointerEvents: 'all'
            }}
            onClick={() => handleDottedLineClick(
              line.fromBoardIndex, 
              line.toBoardIndex, 
              line.fromPort, 
              line.edgeId
            )}
          />
        )}
        
        {/* Visible line with vertical offset */}
        <line
          x1={sourcePos.x}
          y1={sourcePos.y}
          x2={targetPos.x}
          y2={targetPos.y}
          stroke="#666"
          strokeWidth="1.5"
          strokeDasharray={line.style === 'dashed' ? '3,3' : 'none'}
          opacity="0.7"
          style={{
            cursor: line.clickable ? 'pointer' : 'default',
            pointerEvents: 'none' // Let the thick invisible line handle clicks
          }}
        />
      </g>
    );
  });
};

  return (
    <div
      style={{
        padding: '10px',
        overflowY: 'auto',
        height: '100%',
        width: '550px',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* SVG overlay for connection lines */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        {renderConnectionLines()}
      </svg>

      {orderedNodes.length === 0 ? (
        <div>No nodes available</div>
      ) : (
        <div style={{ position: 'relative', zIndex: 2 }}>
          {orderedNodes.map((node, index) => (
            <div
              key={node.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              style={{
                marginBottom: '20px',
                cursor: 'grab',
                borderRadius: '6px',
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {/* Bordered Board Container with Label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Board with pins */}
                <div
                  style={{
                    border: '2px solid black',
                    borderRadius: '6px',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    width: '320px',
                    flexShrink: 0,
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                    <div>{renderPins('input', 16, index)}</div>
                    <div>{renderPins('output', 16, index)}</div>
                  </div>
                </div>

                {/* Node Name with connector line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '4px',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}
                >
                  <strong
                    style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#333',
                      marginLeft: '5px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {node.data.customName || node.data.label}
                    <br />
                    <small style={{ fontSize: '12px', color: '#666' }}>
                      {node.data.label}
                    </small>
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardConfigPanel;

// import React, { useState, useEffect } from 'react';

// const BoardConfigPanel = ({ nodes, edgderedNodes, setOrderedNodes] = useState(nodes);
//   const [boardConnections, setBoardConnections] = useState([]);

//   // Sync local state with prop changes
//   useEffect(() => {
//     setOrderedNodes(nodes);
//   }, [nodes]);

//   // Find all connected board pairs and determine common ports
//   useEffect(() => {
//     const connections = [];

//     orderedNodes.forEach((sourceNode) => {
//       const connectedEdges = edges.filter(
//         (edge) =>
//           edge.source === sourceNode.id || edge.target === sourceNode.id
//       );

//       connectedEdges.forEach((edge) => {
//         const targetId =
//           edge.source === sourceNode.id ? edge.target : edge.source;
//         const targetNode = orderedNodes.find((n) => n.id === targetId);

//         if (!targetNode) return;

//         const sourceLabel = sourceNode.data.label;
//         const targetLabel = targetNode.data.label;

//         const sourceRule = PORT_RULES[sourceLabel]?.[edge.sourceHandle]?.allow || [];
//         const targetRule = PORT_RULES[targetLabel]?.[edge.targetHandle]?.allow || [];

//         const commonPorts = sourceRule.filter((port) => targetRule.includes(port));

//         if (commonPorts.length > 0) {
//           connections.push({
//             sourceId: sourceNode.id,
//             targetId: targetNode.id,
//             connections: commonPorts.map((port) => ({
//               sourcePort: parseInt(edge.sourceHandle.split('-')[1], 10),
//               targetPort: port,
//               lineStyle:
//                 commonPorts.length === 1
//                   ? '2px solid black'
//                   : '2px dashed black',
//             })),
//           });
//         }
//       });
//     });

//     setBoardConnections(connections);
//   }, [edges, orderedNodes, PORT_RULES]);

//   // Helper to get matching pin info for a node
//   // const getMatchingPins = (nodeId, handleType) => {
//   //   const matches = [];

//   //   boardConnections.forEach((conn) => {
//   //     if ((conn.sourceId === nodeId || conn.targetId === nodeId) && conn.connections) {
//   //       conn.connections.forEach((c) => {
//   //         const isSource = conn.sourceId === nodeId;
//   //         const isLeft = handleType.startsWith('left');
//   //         const isRight = handleType.startsWith('right');

//   //         if (isSource && isRight && c.sourcePort !== undefined) {
//   //           matches.push({ sourcePort: c.sourcePort, lineStyle: c.lineStyle });
//   //         }

//   //         if (!isSource && isLeft && c.targetPort !== undefined) {
//   //           matches.push({ targetPort: c.targetPort, lineStyle: c.lineStyle });
//   //         }
//   //       });
//   //     }
//   //   });

//   //   return matches;
//   // };
//   const getMatchingPins = (nodeId, handleType) => {
//     const matches = [];
  
//     boardConnections.forEach((conn) => {
//       if ((conn.sourceId === nodeId || conn.targetId === nodeId) && conn.connections) {
//         conn.connections.forEach((c) => {
//           // Output pins (green): check if node is source and port is sourcePort
//           if (handleType.startsWith('right') && conn.sourceId === nodeId) {
//             if (c.sourcePort !== undefined) {
//               matches.push({ sourcePort: c.sourcePort, lineStyle: c.lineStyle });
//             }
//           }
  
//           // Input pins (red): check if node is target and port is targetPort
//           if (handleType.startsWith('left') && conn.targetId === nodeId) {
//             if (c.targetPort !== undefined) {
//               matches.push({ targetPort: c.targetPort, lineStyle: c.lineStyle });
//             }
//           }
//         });
//       }
//     });
  
//     return matches;
//   };
//   // Render input/output pins with optional lines
//   const renderPins = (type, count, nodeId, matchingPins = []) => {
//     const pins = [];

//     for (let i = 1; i <= count; i++) {
//       const pinKey = `${type}-${i}`;
//       const match = matchingPins.find((p) =>
//         type === 'input'
//           ? p.targetPort === i
//           : p.sourcePort === i
//       );

//       const lineStyle = match?.lineStyle;

//       pins.push(
//         <div
//           key={pinKey}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: 'transparent',
//               margin: '2px auto',
//             }}
//           />
//           {lineStyle && (
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '5px',
//                 left: type === 'input' ? '-300px' : '6px',
//                 width: '300px',
//                 borderTop: lineStyle,
//                 zIndex: 0,
//                  pointerEvents: 'none'
//               }}
//             />
//           )}
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px',
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//       }}
//     >
//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         orderedNodes.map((node) => {
//           const inputMatches = getMatchingPins(node.id, 'left');
//           const outputMatches = getMatchingPins(node.id, 'right');

//           return (
//             <div
//               key={node.id}
//               style={{
//                 marginBottom: '20px',
//                 cursor: 'grab',
//                 borderRadius: '6px',
//                 padding: '8px',
//               }}
//             >
//               {/* Board Container */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {/* Board with pins */}
//                 <div
//                   style={{
//                     border: '2px solid black',
//                     borderRadius: '6px',
//                     padding: '10px',
//                     backgroundColor: '#f9f9f9',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     width: '320px',
//                     flexShrink: 0,
//                   }}
//                 >
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                     <div>{renderPins('input', 16, node.id, inputMatches)}</div>
//                     <div>{renderPins('output', 16, node.id, outputMatches)}</div>
//                   </div>
//                 </div>

//                 {/* Node Name */}
//                 <div
//                   style={{
//                     marginLeft: '10px',
//                     minWidth: 0,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <strong
//                     style={{
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       color: '#333',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {node.data.customName || node.data.label}
//                     <br />
//                     <small>{node.data.label}</small>
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;

// all ok butnotdifi
// import React, { useState } from 'react';

// const BoardConfigPanel = ({ nodes, onNodeOrderChange }) => {
//   const [orderedNodes, setOrderedNodes] = useState(nodes);

//   // Update local state when prop changes
//   React.useEffect(() => {
//     setOrderedNodes(nodes);
//   }, [nodes]);

//   const renderPins = (type, count) => {
//     const pins = [];
//     for (let i = 1; i <= count; i++) {
//       pins.push(
//         <div
//           key={`${type}-${i}`}
//           style={{
//             display: 'inline-block',
//             width: '20px',
//             textAlign: 'center',
//             verticalAlign: 'top',
//           }}
//         >
//           <div
//             style={{
//               width: '4px',
//               height: '4px',
//               borderRadius: '50%',
//               border: `2px solid ${type === 'input' ? 'red' : 'green'}`,
//               backgroundColor: 'transparent',
//               margin: '2px',
//             }}
//           />
//         </div>
//       );
//     }

//     return (
//       <div
//         style={{
//           whiteSpace: 'nowrap',
//           overflowX: 'auto',
//           padding: '4px 0',
//           maxWidth: '320px', // 16 pins * 20px
//         }}
//       >
//         {pins}
//       </div>
//     );
//   };

//   // Handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//     e.currentTarget.style.opacity = '0.5';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//   };

//   // Allow drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // Handle drop
//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();
  
//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
  
//     if (dragIndex === dropIndex) return;
  
//     const updatedNodes = [...orderedNodes];
//     const [movedItem] = updatedNodes.splice(dragIndex, 1);
//     updatedNodes.splice(dropIndex, 0, movedItem);
  
//     // Update local state only
//     setOrderedNodes(updatedNodes);
  
//     // Notify parent about new order (just the node IDs), don't modify actual nodes
//     onNodeOrderChange(updatedNodes.map(n => n.id));
//   };
  
//   return (
//     <div
//       style={{
//         padding: '10px',
//         overflowY: 'auto',
//         height: '100%',
//         width: '550px',
//         flexShrink: 0,
//       }}
//     >
//       {orderedNodes.length === 0 ? (
//         <div>No nodes available</div>
//       ) : (
//         orderedNodes.map((node, index) => (
//           <div
//             key={node.id}
//             draggable
//             onDragStart={(e) => handleDragStart(e, index)}
//             onDragEnd={handleDragEnd}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, index)}
//             style={{
//               marginBottom: '20px',
//               cursor: 'grab',
//               border: '1px solid #ddd',
//               borderRadius: '6px',
//               padding: '8px',
//               backgroundColor: '#fff',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//               transition: 'background-color 0.2s',
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
//           >
//             {/* Bordered Board Container with Label */}
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 overflow: 'hidden',
//               }}
//             >
//               {/* Board with pins */}
//               <div
//                 style={{
//                   border: '2px solid black',
//                   borderRadius: '6px',
//                   padding: '10px',
//                   backgroundColor: '#f9f9f9',
//                   boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                   width: '320px',
//                   flexShrink: 0,
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
//                   <div>{renderPins('input', 16)}</div>
//                   <div>{renderPins('output', 16)}</div>
//                 </div>
//               </div>

//               {/* Node Name with connector line */}
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   marginLeft: '4px',
//                   minWidth: 0,
//                   overflow: 'hidden',
//                 }}
//               >
//                 <strong
//                   style={{
//                     fontSize: '14px',
//                     fontWeight: 'bold',
//                     color: '#333',
//                     marginLeft: '5px',
//                     whiteSpace: 'nowrap',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                   }}
//                 >
//                   {node.data.customName || node.data.label}
//                   <br />
//                   <small>{node.data.label}</small>
//                 </strong>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default BoardConfigPanel;