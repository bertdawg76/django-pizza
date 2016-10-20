import { NgModule }     from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';

import { RegisterComponent }  from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent }    from './home/home.component';
import {RouterGuard} from "./router-guard/router-guard.component";
import {MyOrderComponent} from "./my-orders/my-orders.component";
import {LandingComponent} from "./landing/landing.component";
import {LoginGuard} from "./router-guard/login-guard.component";
import {OrderModal} from "./modal/modal.component";
import {SideModal} from "./side-order-modal/side-order-modal.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/landing', pathMatch: 'full'},
            { path: 'landing', component: LandingComponent},
            { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
            { path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
            { path: 'main', component: HomeComponent, canActivate: [RouterGuard] },
            { path: 'order', component: MyOrderComponent, canActivate: [RouterGuard]},
            { path: "order-modal", component: OrderModal },
            { path: "side-modal", component: SideModal }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

