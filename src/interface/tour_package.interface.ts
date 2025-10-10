/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Package_Charge } from "./enum.types";

export interface IResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface IImage {
  public_id: string;
  path: string;
}

export interface IPackage extends IResponse {
  title: string;
  cover_image: IImage;
  images: IImage[];
  start_date: string;
  end_date: string;
  seats_available: number;
  total_seats: number;
  total_charge: number;
  cost_type: Package_Charge;
  destinations:any[]

}


export interface IPackageData {
  title: string;
  cover_image: File[];
  images: File[];
  start_date: string;
  end_date: string;
  seats_available: number;
  total_seats: number;
  total_charge: number;
  cost_type: Package_Charge;
  destinations:any[]
}