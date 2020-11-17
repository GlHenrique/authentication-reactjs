import React from 'react';
import { AuthProvider } from '../hooks/AuthContext';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;