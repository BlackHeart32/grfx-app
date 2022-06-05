import {Item} from "./item";

export interface CustomResponse{
    timestamp: Date;
    statusCode: number;    
    reason: string;
    message: string;
    developerMessage: string;
    data: {items?: Item[], item?: Item}
}