import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SharedModule } from '../shared/shared.module';


import { AppBootstrapModule } from './../app-bootstrap/app-bootstrap.module';
import { AppProductsRoutingModule } from './app-products-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    FormsModule, 
    ReactiveFormsModule,
    AppBootstrapModule,
    AppProductsRoutingModule,
    RatingModule,
    SharedModule
  ],
  declarations: [ProductCardComponent, ProductListComponent, ProductNewComponent],
  exports: [ProductListComponent]
})
export class AppProductsModule { }
