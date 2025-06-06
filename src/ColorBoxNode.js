import React, { useState } from 'react';
import ReactFlow, { Handle, Position } from 'reactflow';

const ColorBoxNode = ({ data, selected, id }) => {
  const [showOptions, setShowOptions] = useState(false);

  const createHandles = (position, count) => {
    const handles = [];
    const nodeSize = 102;
    const portSize = 12;

    // Special case for Image 2 and 3 (skip top handles)
    if ((data.label === "Image 2" || data.label === "Image 3") && position === Position.Top) {
      return [];
    }

    // Special case for Image 5 (only 8 ports on left/right)
    if (data.label === "Image 5" && (position === Position.Top || position === Position.Bottom)) {
      return [];
    }

    // Special case for Image 6 (only 8 ports on right/bottom)
    if (data.label === "Image 6" && (position === Position.Top || position === Position.Left)) {
      return [];
    }

    if (data.label === "Image 5" && (position === Position.Left || position === Position.Right)) {
      count = 8;
      for (let i = 0; i < count; i++) {
        const style = {
          backgroundColor: '#3b82f6',
          borderRadius: '0',
          width: '4px',
          height: '4px',
        };
        
        const handleId = `${position.toLowerCase()}-${i}`;
        const nodeHeight = 108;
        const topGroupYStart = 10;
        const bottomGroupYStart = nodeHeight - 50;
        const portSpacing = 10;
        
        if (i < 4) {
          style.top = topGroupYStart + (i * portSpacing);
        } else {
          style.top = bottomGroupYStart + ((i - 4) * portSpacing);
        }
        
        if (position === Position.Left) {
          style.left = '-7px';
        } else if (position === Position.Right) {
          style.right = '-7px';
        }
        
        const type = position === Position.Left ? "target" : "source";
        handles.push(
          <Handle 
            key={handleId}
            type={type}
            position={position}
            id={handleId}
            style={style}
            className="square-handle"
          />
        );
      }
      return handles;
    }

    // Special case for Image 6 (only 8 ports on right/bottom)
    if (data.label === "Image 6" && (position === Position.Right || position === Position.Bottom)) {
      count = 8;
      for (let i = 0; i < count; i++) {
        const style = {
          backgroundColor: '#3b82f6',
          borderRadius: '0',
          width: '4px',
          height: '4px',
        };
        
        const handleId = `${position.toLowerCase()}-${i}`;
        const nodeWidth = 102;
        const nodeHeight = 108;
        const leftGroupXStart = 10;
        const rightGroupXStart = nodeWidth - 50;
        const topGroupYStart = 10;
        const bottomGroupYStart = nodeHeight - 50;
        const portSpacing = 10;
        
        if (position === Position.Right) {
          if (i < 4) {
            style.top = topGroupYStart + (i * portSpacing);
          } else {
            style.top = bottomGroupYStart + ((i - 4) * portSpacing);
          }
          style.right = '-7px';
          const type = "source";
          handles.push(
            <Handle 
              key={handleId}
              type={type}
              position={position}
              id={handleId}
              style={style}
              className="square-handle"
            />
          );
        } else if (position === Position.Bottom) {
          style.bottom = '-7px';
          if (i < 4) {
            style.left = leftGroupXStart + (i * portSpacing);
          } else {
            style.left = rightGroupXStart + ((i - 4) * portSpacing);
          }
          const type = "source";
          handles.push(
            <Handle 
              key={handleId}
              type={type}
              position={position}
              id={handleId}
              style={style}
              className="square-handle"
            />
          );
        }
      }
      return handles;
    }

    // Special case for Image 4 (4 left ports, 2 right ports)
    if (data.label === "Image 4" && position === Position.Top) {
      return [];
    }

    if (data.label === "Image 4" && position === Position.Left) {
      count = 4;
      for (let i = 0; i < count; i++) {
        const style = {
          backgroundColor: '#3b82f6',
          borderRadius: '0',
          width: '4px',
          height: '4px',
        };
        
        const handleId = `${position.toLowerCase()}-${i}`;
        if (i < 2) {
          style.top = 20 + (i * 20);
          style.left = '-7px';
        } else {
          style.top = nodeSize - 40 + ((i-2) * 20);
          style.left = '-7px';
        }
        
        handles.push(
          <Handle 
            key={handleId}
            type="target"
            position={position}
            id={handleId}
            style={style}
            className="square-handle"
          />
        );
      }
      return handles;
    }

    if (data.label === "Image 4" && position === Position.Right) {
      count = 2;
      for (let i = 0; i < count; i++) {
        const style = {
          backgroundColor: '#3b82f6',
          borderRadius: '0',
          width: '4px',
          height: '4px',
        };
        
        const handleId = `${position.toLowerCase()}-${i}`;
        const offset = 20;
        style.top = (nodeSize / 2) - offset + (i * (offset * 2));
        style.right = '-7px';
        
        handles.push(
          <Handle 
            key={handleId}
            type="source"
            position={position}
            id={handleId}
            style={style}
            className="square-handle"
          />
        );
      }
      return handles;
    }

    // Special case for Image 2 and 3 (2 ports left/right)
    if ((data.label === "Image 2" || data.label === "Image 3") && (position === Position.Left || position === Position.Right)) {
      count = 2;
      for (let i = 0; i < count; i++) {
        const style = {
          backgroundColor: '#3b82f6',
          borderRadius: '0',
          width: '4px',
          height: '4px',
        };
        
        const handleId = `${position.toLowerCase()}-${i}`;
        const offset = 20;
        
        if (position === Position.Left) {
          style.top = (nodeSize / 2) - offset + (i * (offset * 2));
          style.left = '-7px';
        } else if (position === Position.Right) {
          style.top = (nodeSize / 2) - offset + (i * (offset * 2));
          style.right = '-7px';
        }
        
        const type = position === Position.Left ? "target" : "source";
        handles.push(
          <Handle 
            key={handleId}
            type={type}
            position={position}
            id={handleId}
            style={style}
            className="square-handle"
          />
        );
      }
      return handles;
    }

    // Default handles for other nodes
    for (let i = 0; i < count; i++) {
      const style = {
        backgroundColor: position === Position.Top ? '#FF9933' : '#3b82f6',
        borderRadius: '0',
        width: '4px',
        height: '4px',
      };
      
      const handleId = `${position.toLowerCase()}-${i}`;
      
      if (position === Position.Top) {
        style.left = (i + 2) * (nodeSize / (count + 2)) - (portSize / 4);
        style.top = '-7px';
      } else if (position === Position.Left) {
        style.top = (i + 2) * (nodeSize / (count + 2)) - (portSize / 4);
        style.left = '-7px';
      } else if (position === Position.Right) {
        style.top = (i + 2) * (nodeSize / (count + 2)) - (portSize / 4);
        style.right = '-7px';
      }
      
      const type = position === Position.Top 
        ? (i % 2 === 0 ? "source" : "target") 
        : (position === Position.Left ? "target" : "source");
      
      handles.push(
        <Handle 
          key={handleId}
          type={type}
          position={position}
          id={handleId}
          style={style}
          className="square-handle"
        />
      );
    }
    
    return handles;
  };

  const hasImage = data.imageUrl && data.imageUrl !== '';
  const isImage2 = data.label === "Image 2";
  const displayName = data.customName || data.label;

  return (
    <div 
      className="color-box-node" 
      style={{ 
        backgroundColor: data.color,
        width: '102px',
        height: '108px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        position: 'relative',
        border: selected ? '2px solid #ef4444' : '2px solid #000',      
      }}
    >
      {/* Create spaced square handles */}
      {!(isImage2 || data.label === "Image 3" || data.label === "Image 6") && createHandles(Position.Top, 16)}
      {!(data.label === "Image 6") && createHandles(Position.Left, 16)}
      {createHandles(Position.Right, 16)}
      {data.label === "Image 6" && createHandles(Position.Bottom, 16)}
      
      {/* Image rendering logic */}
      {(isImage2 || data.label === "Image 3") && (
        <div style={{ width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={data.label === "Image 2" ? "/img1.png" : "/s1.png"}  
            alt="Circuit Diagram" 
            style={{ 
              width: '90px', 
              height: '90px', 
              objectFit: 'contain'
            }} 
          />
        </div>
      )}
      
      {/* Display the image if available */}
      {hasImage && !(isImage2 || data.label === "Image 3") && (
        <div style={{ width: '120px', height: '85px', marginTop: '1px', marginBottom: '1px' }}>
          <img 
            src={data.imageUrl} 
            alt={displayName} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain'
            }} 
          />
        </div>
      )}
      
      <div className="node-label" style={{ color: 'Black', fontWeight: 'bold' }}>
        {displayName}
      </div>
    </div>
  );
};

export default ColorBoxNode;