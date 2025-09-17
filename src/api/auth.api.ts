/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ILoginData, IRegisterData } from "../interface/auth.interface";
import api from ".";

// api function send http request
export const login = async (data: ILoginData) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

// register user
export const registerUser = async (data: IRegisterData) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

// get user
export const getProfile = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
