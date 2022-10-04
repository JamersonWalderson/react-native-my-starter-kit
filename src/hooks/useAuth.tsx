import React, { createContext, Dispatch, useContext, useEffect, useState } from 'react';

interface IAuth {
    signature: boolean;
    loading: boolean;
}

type Props = {
  children?: React.ReactNode;
}

export const AuthContext = createContext({} as IAuth);

export const AuthProvider: React.FC<Props> = ({ children}) => {
  const [signature, setSignature] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  })

  return(
    <AuthContext.Provider value={{
      signature,
      loading,
    }}>
        { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}