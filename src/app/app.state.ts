import { CartState } from "../app/components/ngrx/stateModel";

export interface AppState{
    readonly cartState: CartState;
}