import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'animate.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
