import { Status } from "../enum/status.enum";

export interface Item{
    id: number;
    name: string;
    brand: String;
    imageUrl: string;
    color: String;
    quantity: number;
    cost: number;
    price: number;
    status: Status
    
}