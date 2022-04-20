import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from '../components/details/details.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [ProductListComponent,HomeComponent, DetailsComponent];
}
