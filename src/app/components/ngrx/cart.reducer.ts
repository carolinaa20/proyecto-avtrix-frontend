import { createReducer, on, State } from '@ngrx/store';
import {
  increment,
  removeProduct,
  removeAllProduct,
} from '../ngrx/cart.action';
import { CartState } from './stateModel';
import { filter } from 'rxjs';

export const initialState: CartState = {
  products: [],
  grandTotal: 0,
};

export const cartReducer = createReducer(
  initialState,

  on(increment, (state, { product }) => {
    console.log(state)
    return {

      products: [...state.products, product],
      grandTotal: state.grandTotal + product.price,
    }
  }),

  on(removeProduct, (state, { productId, price }) => ({
    products: state.products.filter((product) => product.id !== productId),
    grandTotal: state.grandTotal - price,
  }))
);
