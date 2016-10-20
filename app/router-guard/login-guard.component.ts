import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router:Router) {}

    canActivate() {
        if (localStorage.getItem('token') === null)  {

            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/landing']);
        return false;
    }
}