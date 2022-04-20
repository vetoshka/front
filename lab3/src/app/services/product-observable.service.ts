import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, catchError, retry, share, concatMap } from 'rxjs';
import { ProductsAPI } from './product.config';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'any'
})
export class ProductObservableService {
  constructor(
    private http: HttpClient,
    @Inject(ProductsAPI) private productsUrl: string
  ) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }
  getProduct(id: number | string) : Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
    .pipe(
    retry(3),
    share(),
   catchError(this.handleError)
    );
   }
  updateProduct(product: Product) : Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
    .put<Product>(url, product, options)
    .pipe( catchError(this.handleError) );
  }   
  createProduct(user: Product) : Observable<Product> {
    const url = this.productsUrl;
    const options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
    .post<Product>(url, user, options)
    .pipe(
    catchError( this.handleError )
    );
    }
  deleteProduct(product: Product) : Observable<Product[]> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.delete(url).pipe(
    concatMap(() => this.getProducts()),
    catchError(this.handleError)
    );
    }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      13
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}