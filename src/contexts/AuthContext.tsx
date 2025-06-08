import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { login, setAuthToken, User } from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  signIn: async () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('authToken')
  );

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) setUser(JSON.parse(storedUser));
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
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);