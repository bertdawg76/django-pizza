import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class RouterGuard implements CanActivate {

    constructor(private router:Router) {}

    canActivate() {
        if (localStorage.getItem('token')) {

            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/landing']);
        return false;
    }
}