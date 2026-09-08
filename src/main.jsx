import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "boxicons/css/boxicons.min.css";


import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import AuthProvider from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>  
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)