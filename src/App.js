// import './App.css';

// import ImageConnector from './ImageConnector';


// function App() {
//   return (
//     <div className="App">
//       <ImageConnector />
//   </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
// import { AuthProvider } from './auth-context';
// import Login from './Login';
// import Register from './Register';
// import ProtectedRoute from './ProtectedRoute';
// import ImageConnector from './ImageConnector';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route element={<ProtectedRoute />}>
//             <Route path="/main" element={<ImageConnector />} />
//           </Route>
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth-context';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import ImageConnector from './ImageConnector';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={
            <ProtectedRoute>
              <ImageConnector />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;