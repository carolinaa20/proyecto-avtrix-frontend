import { createAction, props } from '@ngrx/store';
import { Videogame } from '../../models/videogame.models';

export const increment = createAction(
  '[Home Component] Add Product',
  props<{ product: Videogame }>()
);

export const removeProduct = createAction(
  '[Cart Component] remove Product',
  props<{ productId:string; price: number }>()
);

export const removeAllProduct = createAction(
  '[Cart Component] remove All Products'
);
