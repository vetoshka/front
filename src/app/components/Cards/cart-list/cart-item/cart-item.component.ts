import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input()
  product!: CartModel;

  @Output()
  deleteFromCart: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  @Output()
  increaseProductCount: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  @Output()
  decreaseProductCount: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  onDeleteFromCart(): void {
    console.log(this.product)
    this.deleteFromCart.emit(this.product);
  }

  onIncrease(): void {
    this.increaseProductCount.emit(this.product);
    this.product.quantity++;
  }
  onDecrease(): void {
    if (this.product.quantity) {
      this.decreaseProductCount.emit(this.product);
      this.product.quantity--;
    }

  }

}
