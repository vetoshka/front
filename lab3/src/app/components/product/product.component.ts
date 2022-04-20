import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  constructor( private router: Router) { }
  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  ngOnInit(): void {
  }
  onDetailsRoute(){
    const link = ['home','details',this.product.id];
    this.router.navigate(link);
  }
  onAddToCart(): void {
    console.log("product was bought");
    this.addToCart.emit(this.product);
  }
}
