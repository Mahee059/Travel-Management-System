export interface ILoginData{ 
    email: string; 
    password: string;
}


export interface IRegisterData { 
    email: string; 
    password: string;
    first_name: string; 
    confirm_password: string;
    last_name: string; 
    gender?: string; 
    phone?: string;

}