import { Component, OnInit, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login.service';
import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {

    constructor( private loginService: LoginService, private router: Router) {
    }

    public ngOnInit( ){

    }

    logout(){
        this.loginService.logout();
    }

    isLoggedIn() {
        if (localStorage.getItem('token')) {

            return true;
        }

        return false;
    }


}
