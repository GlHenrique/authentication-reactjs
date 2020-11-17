import Axios from 'axios';
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    Axios.get('https://reqres.in/api/users').then(
      () => {
        setToken('');
        setLoading(false);
      },
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!token,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
