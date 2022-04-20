import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { ProductComponent } from '../components/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeRoutingModule.components, ProductComponent]
})
export class HomeModule {}
