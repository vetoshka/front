import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductObservableService } from '../services/product-observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  onRedirectToCart(){
    this.router.navigate(['cart'])
  }
  onRedirectToLogIn(){
    this.router.navigate(['login'])
  }
}
