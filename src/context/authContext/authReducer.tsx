import { AuthAction } from './AuthActions';
import { AuthState } from './AuthState';

export const authReducer = (
    state: AuthState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null
            };
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null
            };
        case 'AUTH_FAILED':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};
