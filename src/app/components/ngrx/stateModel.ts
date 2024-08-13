import { Videogame } from "../../models/videogame.models";

export interface CartState{
    products: Videogame[];
    grandTotal: number;
}