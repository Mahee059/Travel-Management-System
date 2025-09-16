/* eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";


//* get all packages
export const get_all_packages = async () => {
  try {
    const response = await api.get("/tour_package");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};


//* get popular destinations
export const get_popular = async () => {
  try {
    const response = await api.get("/tour_package");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

//* get popular destinations
export const get_by_id = async (id:string) => {
  try {
    const response = await api.get(`/tour_package/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};


// book package
export const book = async (data:{ tour_package:string, total_person:string, phone:string }) => {
  try {
    const response = await api.post(`/booking`, data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

