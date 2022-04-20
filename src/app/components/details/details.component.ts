import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductObservableService } from 'src/app/services/product-observable.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product!: Product;
  constructor(private route: ActivatedRoute, private router: Router, private productObservableService: ProductObservableService) { }



  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.productObservableService.getProduct(id).subscribe((product: Product) => {
      this.product = { ...product };
    })
  }

}
