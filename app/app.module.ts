import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PizzaToppingComponent } from './pizza-toppings/pizza-toppings.component';
import { PizzaSizeComponent } from './pizza-sizes/pizza-sizes.component';
import { AppComponent } from './app.component';
import { ToppingService } from "./services/topping.service";
import { SizeService } from './services/sizes.service';
import {CrustService} from "./services/crust.service";
import {PizzaCrustComponent} from "./pizza-crusts/pizza-crusts.component";
import {PizzaOrderComponent} from "./pizza-order/pizza-order.component";
import {OrderService} from "./services/order.service";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login/login.component";
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";
import {RouterGuard} from "./router-guard/router-guard.component";
import {MyOrderComponent} from "./my-orders/my-orders.component";
import {LandingComponent} from "./landing/landing.component";
import {LoginGuard} from "./router-guard/login-guard.component";
import {ModalModule} from "ng2-modal/index";
import {OrderModal} from "./modal/modal.component";
import {SideService} from "./services/sides.service";
import {SideOrderComponent} from "./side-orders/side-orders.component";
import {SideModal} from "./side-order-modal/side-order-modal.component";



@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ModalModule


    ],
    declarations: [
        AppComponent,
        HelloWorldComponent,
        PizzaToppingComponent,
        PizzaSizeComponent,
        PizzaCrustComponent,
        PizzaOrderComponent,
        RegisterComponent,
        HomeComponent,
        LoginComponent,
        MyOrderComponent,
        LandingComponent,
        OrderModal,
        SideOrderComponent,
        SideModal


    ],
    providers: [
        ToppingService,
        SizeService,
        CrustService,
        OrderService,
        RegisterService,
        LoginService,
        RouterGuard,
        LoginGuard,
        SideService

    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
