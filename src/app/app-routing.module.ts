import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //{ path: 'products', loadChildren: () => import('./app-products/app-products.module').then(m => m.AppProductsModule) },
  { path: 'products', component: HomeComponent},
  { path: 'user', loadChildren: () => import('./app-user/app-user.module').then(m => m.AppUserModule) },
  { path: '**', redirectTo: '/products' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
