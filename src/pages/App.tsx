import React from 'react';
import { AuthProvider } from '../hooks/AuthContext';
import Routes from './routes';

const App:React.FC = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
