import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductObservableService } from 'src/app/services/product-observable.service';
import { CartObservableService } from '../Cards/cart-observable.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Array<Product>>;
  constructor( private productObservableService: ProductObservableService, private cartService: CartObservableService) { }

  ngOnInit(): void {
    this.products$ = this.productObservableService.getProducts();
  }
  onAddToCart(product: Product, quantity: number = 1): void {
    let cardProduct = { ...product, quantity };
    
    this.cartService.getCartProducts().subscribe(
      (items) => {
        if (items.find(x => x.id === product.id)) {
          this.cartService.increaseQuantity(cardProduct, 1);
        } else {
          this.cartService.createCart(cardProduct).subscribe();
        }
      }
    );

  }

}
