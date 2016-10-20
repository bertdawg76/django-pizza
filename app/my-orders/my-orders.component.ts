import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order, pizzaOrder } from '../pizza-order/pizza-order';
import { OrderService } from '../services/order.service';
import { FormGroup } from '@angular/forms';
import { myOrder } from './my-order';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {SideService} from "../services/sides.service";


@Component({
    moduleId: module.id,
    selector: 'my-order',
    templateUrl: './my-orders.component.html',
    styleUrls: ['my-orders.component.css']

})


export class MyOrderComponent {
    public myOrder: myOrder;
    public orders: any = [];
    public sides: any = [];


    errorMessage: string;
    model = 'Observable';


    constructor(private orderService: OrderService, private sideService: SideService, private router:Router ) {

    }



    ngOnInit() { this.getOrders() }

    getOrders() {
        this.orderService.getOrders().subscribe((r:any) => {
            console.log(r);
            r.forEach((order) => {
                console.log(order.id, order.size);
                let temp:Array<any> = [];
                order.toppings.forEach((topping:any) => {
                    this.orderService.getTopping(topping).subscribe((toppingObj:any) => {
                        temp.push(toppingObj);
                        order.toppings = temp;
                        console.log('this is the toppings list ', toppingObj);
                    });
                });
                this.orderService.getSize(order.size).subscribe((size:any) => {
                    order.size = size;
                });
                this.orderService.getCrust(order.crust).subscribe((crust:any) => {
                    order.crust = crust;
                    //this.orders.push(order);
                });
                this.orderService.getSides(order.sides).subscribe((sides:any) => {
                    order.sides = sides;
                    this.orders.push(order);
                })
            });
            console.log(this.orders);
        });

    }

    getMySides(){
        this.sideService.getMySides()

            .subscribe(
                sides => this.sides = sides,
                error => this.errorMessage = <any>error


            );
        console.log(this.sides);
    }


    reOrder(data: myOrder){
        console.log(data);
        let oldToppings = [];
        data.toppings.forEach((topping) => {
            oldToppings.push(topping.id);
        });
        this.orderService.addNewOrder(
            {
            'toppings': oldToppings,
            'size': data.size.id,
            'crust': data.crust.id
        }
        )
            .subscribe(
                () =>this.router.navigate(['/order-modal']),
                error => this.errorMessage = <any>error);
    }
}

