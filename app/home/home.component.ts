import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    grandtotal: any;
    order = {
        toppings: [],
        size: Number,
        crust: Number,
        toppings_name: [],
        //toppingsStuff: []
    };

    price = {
        size_price: 0,
        crust_price: 0,
        toppings_price: [0]
    };



    constructor( private loginService:  LoginService ) {
        console.log('this is the grand total', this.grandtotal);
        this.grandtotal = new Number;
    }


    ngOnInit(){}

    calculate(){
       // var total = 0;
        var size = +this.price.size_price;
        var crust = +this.price.crust_price;
        var toppingsTotal = 0;
        for(var i = 0; i < this.price.toppings_price.length; i++ ){
           toppingsTotal +=  +this.price.toppings_price[i];
            console.log('this is your grand total: ', toppingsTotal);

        }

        this.grandtotal = toppingsTotal + crust + size;
        console.log('this is the calculate function total: ', this.grandtotal);
        return this.grandtotal;
    }







    // Local function that is called from this component's html
    public pushTopping(event: any) {
        this.order.toppings.push(event.id);
        this.order.toppings_name.push(event);
        //this.order.toppings_price.push(event.topping_price);
        this.price.toppings_price.push(event.topping_price);
        //console.log('topping price is: ', event.topping_price);
        console.log('this is the topping price array ', event);
        console.log(this.order);
        console.log(event.topping_price);
        console.log('topping price array when topping added: ', this.price.toppings_price);
        console.log(event.id);
        this.calculate();
    }

    public pushSize(event: any) {
        this.order.size = event;
        this.price.size_price = (event.size_price);
        console.log(this.order);
        console.log('size price is: ', event);

        this.calculate();
        console.log(this.price);

    }

    public pushCrust(event: any) {
        this.order.crust = event;
        this.price.crust_price = (event.crust_price);
        console.log(this.order);
        console.log('crust price is: ', event.crust_price);
        this.calculate();
        console.log('this.price');
    }

    public removeTopping(event: any){
        let remove = this.price.toppings_price.indexOf(event);
        let index = this.order.toppings.indexOf(event);
        console.log(index);
        this.order.toppings.splice(index, 1);
        this.order.toppings_name.splice(index, 1);
        this.price.toppings_price.splice(remove, 1);
        console.log('this is the remove event: ', event);
        console.log('toppings price array: ', this.price.toppings_price);
        this.calculate();

        console.log('this is your order', this.order);
        console.log('this is your price object ', this.price);
    }




}