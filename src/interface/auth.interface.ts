import type { IResponse } from "./tour_package.interface";

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirm_password: string;
  gender?: string;
  phone?: string;
}

export interface IUser extends IResponse {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirm_password: string;
  gender?: string;
  phone?: string;
}