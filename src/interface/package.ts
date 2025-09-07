import type { Package_Charge } from "./enum.types";
import type { IImage, IResponse } from "./global.types";


interface IDestination {
    _id: string;
    location: string;
    description:string
}
export interface IPackage extends IResponse {
    title: string,
    price: number,
    cover_image: IImage,
    images: IImage[],
    destinations: IDestination,
    start_date:string,
    end_date: string,
    seats_available: number,
    total_seats: number,
    total_charge: number
    cost_type: Package_Charge,
    
}