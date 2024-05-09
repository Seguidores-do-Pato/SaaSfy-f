import { User } from '@/interfaces/User';
import { ReactNode, createContext, useContext, useState, FC } from 'react';
import Cookie from 'js-cookie';
import { TSignIn, loginValidator } from '@/lib/validators';
import { api } from '@/lib/api';
import { SIGNIN_URL } from '@/config/api-urls';

interface AuthContextProps {
    User: User | null;
    SignIn: (props: TSignIn) => Promise<void>;
    SignOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const userCookie = Cookie.get('USER-INFO');
        return userCookie ? JSON.parse(userCookie) : null;
    });

    const SignIn = async (props: TSignIn) => {
        const { email, password } = loginValidator.parse(props);

        const { data } = await api.post(`${SIGNIN_URL}`, {
            email,
            password
        });

        setUser(data);
        Cookie.set('USER-INFO', JSON.stringify(data));
    };

    const SignOut = async () => {
        Cookie.remove('USER-INFO');
        setUser(null);
    };

    const AuthContextData = {
        User: user,
        SignIn: SignIn,
        SignOut: SignOut
    };

    return <AuthContext.Provider value={AuthContextData}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextProps {
    const context = useContext(AuthContext);
    return context;
}
