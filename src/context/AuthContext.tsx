import React, {createContext, useContext, useState} from 'react';
import {AuthContextProps, User} from '../types/common';

const AuthContext = createContext<AuthContextProps>({
  token: null,
  user: null,
  setToken: () => {},
  setUser: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{token, user, setUser, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
