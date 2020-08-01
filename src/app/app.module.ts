import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {environment} from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {Router, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './Services/auth.service';
import {AuthGuard} from './Services/auth-guard.service';
import {UserService} from './user.service';
import {AdminAuthGuard} from './Services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthGuardModule,
    RouterModule.forRoot([
        {path: '',                component: HomeComponent},
        {path: 'login',           component: LoginComponent},
        {path: 'products',        component: ProductsComponent},
      // normal user
        {path: 'shopping-cart',   component: ShoppingCartComponent},
        {path: 'check-out',       component: CheckOutComponent, canActivate: [AuthGuard]},
        {path: 'order-success',   component: OrderSuccessComponent, canActivate: [AuthGuard]},
        {path: 'myorders',        component: MyOrdersComponent, canActivate: [AuthGuard]},
      // admin
        {path: 'admin/products',  component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
        {path: 'admin/orders',    component: AdminOrdersComponent, canActivate: [AuthGuard]},
        ]),
    NgbModule
  ],
  providers: [AuthService, AuthGuard, AdminAuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
