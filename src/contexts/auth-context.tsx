import { User } from '../interfaces/User';
import { ReactNode, createContext, useContext, useState } from 'react';
import { api } from '@/lib/api';
import { SIGNIN_URL, SIGNUP_URL } from '@/config/api-urls';
import Cookie from 'js-cookie';
import { TSignUp } from '@/lib/validators';

interface AuthContextProps {
    User: User | null;
    SignIn: (email: string, password: string) => Promise<void>;
    SignOut: () => Promise<void>;
    SignUp: (props: TSignUp) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const userCookie = Cookie.get('USER-INFO');
        return userCookie ? JSON.parse(userCookie) : null;
    });

    const SignIn = async (email: string, password: string) => {
        const { data } = await api.post(`${SIGNIN_URL}`, {
            email,
            password
        });

        setUser(data);
        Cookie.set('USER-INFO', JSON.stringify(data));
    };

    const SignUp = async (props: TSignUp) => {
        const { email, password, name } = props;

        const response = await api.post(`${SIGNUP_URL}`, {
            email,
            name,
            password
        });
    };

    const SignOut = async () => {
        Cookie.remove('USER-INFO');
        setUser(null);
    };

    const AuthContextData = {
        User: user,
        SignIn: SignIn,
        SignOut: SignOut,
        SignUp: SignUp
    };

    return <AuthContext.Provider value={AuthContextData}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextProps {
    const context = useContext(AuthContext);
    return context;
}
