import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { login, setAuthToken, User, getUser } from '../services/api';

interface AuthContextProps {
  user: User | null;
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  loading: true,
  signIn: async () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('authToken')
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      getUser()
        .then((res) => {
          setUser(res.data);
          localStorage.setItem('authUser', JSON.stringify(res.data));
        })
        .catch(() => {
          console.warn('toke expired, clear session');
          setAuthToken(null);
          setUser(null);
          setToken(null);
          localStorage.removeItem('authToken');
          localStorage.removeItem('authUser');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  const signIn = async (email: string, password: string) => {
    const { user: loggedUser, token: authToken } = await login(email, password);
    setUser(loggedUser);
    setToken(authToken);
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('authUser', JSON.stringify(loggedUser));
    setAuthToken(authToken);
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);