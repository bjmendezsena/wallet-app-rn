import { LoginRequest, UserInterface } from '../../interfaces/appInterfaces';
export type AuthAction =
    | {
          type: 'SIGN_IN';
          payload: UserInterface;
      }
    | {
          type: 'LOG_IN';
          payload: UserInterface;
      }
    | {
          type: 'AUTH_FAILED';
          payload: string;
      };
