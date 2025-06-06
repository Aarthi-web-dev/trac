// import React from 'react';

// /**
//  * File Menu dropdown component
//  * Displays options to create a new file or open existing files
//  */
// const FileMenu = ({ savedFiles, onCreateNew, onOpenFile, onClose }) => {
//   return (
//     <div 
//       style={{
//         position: 'absolute',
//         top: '100%',
//         left: 0,
//         width: '200px',
//         backgroundColor: 'white',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderRadius: '4px',
//         zIndex: 1000,
//       }}
//     >
//       <div
//         style={{
//           padding: '8px',
//           borderBottom: '1px solid #e5e7eb',
//           cursor: 'pointer',
//           hover: {
//             backgroundColor: '#f3f4f6'
//           }
//         }}
//         onClick={onCreateNew}
//       >
//         Create New File
//       </div>
      
//       {savedFiles.length > 0 && (
//         <>
//           <div
//             style={{
//               padding: '8px',
//               backgroundColor: '#f3f4f6',
//               fontSize: '0.9rem',
//               fontWeight: 'bold'
//             }}
//           >
//             Open Existing File
//           </div>
          
//           <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
//             {savedFiles.map((fileName, index) => (
//               <div
//                 key={index}
//                 style={{
//                   padding: '8px',
//                   borderBottom: index < savedFiles.length - 1 ? '1px solid #e5e7eb' : 'none',
//                   cursor: 'pointer',
//                   hover: {
//                     backgroundColor: '#f3f4f6'
//                   }
//                 }}
//                 onClick={() => onOpenFile(fileName)}
//               >
//                 {fileName}
//               </div>
//             ))}
//           </div>
//         </>
//       )}
      
//       {/* Overlay to handle clicking outside the menu */}
//       <div 
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: -1
//         }}
//         onClick={onClose}
//       />
//     </div>
//   );
// };

// export default FileMenu;
import React from 'react';

export default function FileMenu({ onCreateNew, onOpenExisting, onClose }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: 'white',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        padding: '8px 0',
        zIndex: 100,
        minWidth: '180px'
      }}
    >
      <div
        onClick={onCreateNew}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          cursor: 'pointer',
          hover: { backgroundColor: '#f3f4f6' }
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <span style={{ marginRight: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </span>
        Create New File
      </div>
      <div
        onClick={onOpenExisting}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <span style={{ marginRight: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
        </span>
        Open Existing File
      </div>
    </div>
  );
}