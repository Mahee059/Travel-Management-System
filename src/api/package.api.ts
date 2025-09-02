 
import api from '.'; 

// get all packages
export const get_all_packages = async () => { 
    try { 
        const response = await api.get('/tour_packages'); 
         return response.data
    
    
    } catch (error: any) { 
        throw error.response.data
      }
} 
 
 
//get popular destinations
export const get_popular = async () => { 
    try { 
        const response = await api.get('/tour_packages'); 
         return response.data
    
    
    } catch (error: any) { 
        throw error.response.data
      }
} 
 

