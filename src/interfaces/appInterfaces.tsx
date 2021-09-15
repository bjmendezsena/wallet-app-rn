export interface UserInterface {
    dni: string;
    name: string;
    lastName: string;
    email: string;
}
export interface UserDTO {
    dni: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    ok: boolean;
    data: any | UserInterface;
}
