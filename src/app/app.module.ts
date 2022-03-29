import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppAuthModule } from './app-auth/app-auth.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppUserModule } from './app-user/app-user.module';
import { AppAlertModule } from './app-alert/app-alert.module';
import { SharedModule } from './shared/shared.module';
import { AppProductsModule } from './app-products/app-products.module';
import { HomeComponent } from './app-home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppAuthModule,
    AppBootstrapModule,
    AppUserModule,
    AppAlertModule,
    SharedModule,
    AppProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
