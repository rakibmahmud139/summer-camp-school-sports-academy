import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Routes'
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'



const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div >
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </ QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
