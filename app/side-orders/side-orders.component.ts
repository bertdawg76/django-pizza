import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {SideService} from "../services/sides.service";

@Component({
    moduleId: module.id,
    selector: 'side-order',
    templateUrl: './side-order.component.html',
    styleUrls: ['side-order.component.css']

})

export class SideOrderComponent implements OnInit {

    sides: Sides[];
    errorMessage: string;
    constructor (private sideService: SideService) {}

    ngOnInit() { this.getSides(); }

    getSides(){
        this.sideService.getSides()

            .subscribe(
                sides => this.sides = sides,
                error => this.errorMessage = <any>error


            )

    }
}