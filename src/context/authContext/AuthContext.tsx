import { authReducer } from './authReducer';
import React, { createContext, useReducer } from 'react';
import { AuthState } from './AuthState';
import {
    LoginRequest,
    UserInterface,
    UserDTO
} from '../../interfaces/appInterfaces';
import { authRepository } from '../../services/authService/authRepository';

const authInitialState: AuthState = {
    isLoggedIn: false,
    user: null,
    error: null
};

interface AuthContextProps {
    authState: AuthState;
    signIn: (user: UserDTO) => void;
    login: (request: LoginRequest) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const login = async (request: LoginRequest) => {
        const { data, ok } = await authRepository.login(request);
        if (!ok) {
            return dispatch({
                type: 'AUTH_FAILED',
                payload: data
            });
        }
        dispatch({ type: 'LOG_IN', payload: data });
    };

    const signIn = async (request: UserDTO) => {
        const { data, ok } = await authRepository.register(request);
        if (!ok) {
            return dispatch({
                type: 'AUTH_FAILED',
                payload: data
            });
        }

        const { password, ...rest } = request;

        dispatch({ type: 'SIGN_IN', payload: rest });
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                login
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
