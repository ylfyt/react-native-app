import {createContext, FC, ReactNode, useContext, useState} from 'react';

interface IAuthContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<IAuthContext>({
  username: '',
  setUsername: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

interface Props {
  children: ReactNode;
}
const AuthProvider: FC<Props> = ({children}) => {
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider value={{username, setUsername}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
