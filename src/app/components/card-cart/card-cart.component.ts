import { Component, Input, inject, signal, SimpleChanges } from '@angular/core';
import { VideogamesService } from '../../service/videogames.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { removeProduct } from '../ngrx/cart.action';
@Component({
  selector: 'app-card-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, RouterLink],
  templateUrl: './card-cart.component.html',
  styleUrl: './card-cart.component.css',
})
export class CardCartComponent {
  private cartservice = inject(CartService);
  gamesinngrx = [];
  videogames = signal<any>([]);
  @Input() videogame: any;

  productQuantity = new FormControl(0);

  constructor(private store: Store<AppState>) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['videogame'] && this.videogame) {
      this.productQuantity.setValue(this.videogame.quantity);
    }
  }

  increment(videogameId: string) {
    this.cartservice.incrementQuantity(videogameId);
  }

  decrement(videogameId: string) {
    this.cartservice.decrementQuantity(videogameId);
  }

  deleteToCart(videogameId: string) {
    this.cartservice.deleteItem(videogameId);
  }
  ngOnInit(){
    this.store.pipe(select('cartState')).subscribe((state: any) => {
      this.gamesinngrx = state.products
      console.log(state)
    })
  }
  removeGame(id:string, price:number){
    this.store.dispatch(removeProduct({productId:id, price}))
    
  }

}
