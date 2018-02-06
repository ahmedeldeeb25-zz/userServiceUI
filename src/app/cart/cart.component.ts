import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';

declare var jquery: any;
declare var $;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService]
})
export class CartComponent implements OnInit {


  quantity;
  carts: Cart[] = [];

  constructor(private cartService: CartService) {
    this.quantity = 2;

    cartService.getUserCart(1).subscribe(
      data => {
        this.carts = data;
      }, error => console.log("Error :: " + error)
    );
  }

  ngOnInit() {
  }

  plus(cart) {

    cart.quantity++;
  }

  minus(cart) {
    if (this.quantity != 0)
      cart.quantity--;
  }


  edit(cart: Cart) {
    for (let c of this.carts) {
      c.disable = false;
    }
    cart.disable = !cart.disable;

  }

  checkout(cart: Cart) {
    this.cartService.editCartProduct(1, cart).subscribe(successCode => {
    }
      , error => console.log("Error :: " + error));
    window.location.reload();
  }



}
