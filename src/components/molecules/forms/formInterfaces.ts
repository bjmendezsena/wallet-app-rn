import { LoginRequest } from '../../../interfaces/appInterfaces';

export interface ForomProps {
    disabled: boolean;
    onSubmit: () => void;
    footer?: JSX.Element | JSX.Element[];
}
