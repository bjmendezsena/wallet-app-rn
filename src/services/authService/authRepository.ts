import { http } from '../api/http';
import {
    LoginRequest,
    UserInterface,
    AuthResponse,
    UserDTO
} from '../../interfaces/appInterfaces';

const authUrl = '/auth';

export const authRepository = {
    login: async (request: LoginRequest): Promise<AuthResponse> => {
        try {
            const data = await http.post<UserInterface>(
                `${authUrl}/login`,
                request
            );
            return {
                ok: true,
                data
            };
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                data: error
            };
        }
    },
    register: async (data: UserDTO): Promise<AuthResponse> => {
        try {
            const result = await http.post<UserInterface>(
                `${authUrl}/register`,
                data
            );
            return {
                ok: true,
                data: result
            };
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                data: error
            };
        }
    }
};
