
import type { ILoginData, IRegisterData } from "../interface/auth.interface"
import api from '.'
 

//api function send http request
  export const login = async (data:ILoginData) => { 
    try { 
      const response = await api.post('/auth/login', data )
      return response.data
      
    } catch (error:any){ 
        console.log(error) 
        throw error.response.data 
   }
 }
  
 

 //api function send http request
  export const regsiterUser = async (data:IRegisterData) => { 
    try { 
      const response = await api.post('/auth/register', data)
      return response.data
      
    } catch (error:any){ 
        console.log(error) 
        throw error.response.data 
   }
 }
