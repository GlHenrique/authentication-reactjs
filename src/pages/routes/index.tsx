import React from 'react';

import PublicRoutes from './public-routes';
import PrivateRoutes from './private-routes';
import { useAuth } from '../../hooks/AuthContext';

const Routes: React.FC = () => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <></>;
  }

  return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
