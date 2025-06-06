import React from 'react';
import { ReactFlow, Background, Controls, MiniMap } from 'reactflow';

const FlowCanvas = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onSelectionChange,
  onNodeClick,
  onPaneClick,
  nodeTypes,
  onInit,
  onDrop,
  onDragOver,
  defaultEdgeOptions
}) => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      onDrop={onDrop}
      onDragOver={onDragOver}
      nodeTypes={nodeTypes}
      onSelectionChange={onSelectionChange}
      onNodeClick={onNodeClick}
      onPaneClick={onPaneClick}
      connectionLineType={'smoothstep'}
      defaultEdgeOptions={defaultEdgeOptions}
      fitView
      deleteKeyCode={['Backspace', 'Delete']}
      multiSelectionKeyCode={['Control', 'Meta']}
      zoomOnScroll={false}
      panOnScroll={true}
      panOnScrollMode="free"
      zoomOnDoubleClick={false}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};

export default FlowCanvas;