import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './contexts/theme-provider.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster.tsx';
import './globals.css';
import { AuthProvider } from './contexts/auth-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="theme-config">
            <AuthProvider>
                <BrowserRouter>
                    <App />
                    <Toaster />
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
