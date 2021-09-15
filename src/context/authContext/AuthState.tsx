import { UserInterface } from '../../interfaces/appInterfaces';
export interface AuthState {
    isLoggedIn: boolean;
    user: UserInterface | null;
    error: any;
}
