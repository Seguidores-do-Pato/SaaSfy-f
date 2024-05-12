import { User } from '../interfaces/User';
import { ReactNode, createContext, useContext, useState } from 'react';
import { api } from '@/lib/api';
import { SIGNIN_URL, SIGNUP_URL } from '@/config/api-urls';
import Cookie from 'js-cookie';
import { TSignIn } from '@/lib/validators';

interface AuthContextProps {
    user: User | null;
    SignIn: (email: string, password: string) => Promise<void>;
    SignOut: () => Promise<void>;
    SignUp: (props: TSignIn) => Promise<void>;
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

    const SignUp = async (props: TSignIn) => {
        const { email, password } = props;

        const response = await api.post(`${SIGNUP_URL}`, {
            email,
            password
        });
    };

    const SignOut = async () => {
        Cookie.remove('USER-INFO');
        setUser(null);
    };

    const AuthContextData = {
        user: user,
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
