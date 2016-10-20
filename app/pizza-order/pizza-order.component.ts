import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order, pizzaOrder, Stuff } from './pizza-order';
import { OrderService } from '../services/order.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pizza-order',
    templateUrl: './pizza-order.component.html',
    styleUrls: ['pizza-order.component.css']

})
export class PizzaOrderComponent {



    public orders: any = [];
    @Input() orderstuff: pizzaOrder;
    @Input() totalprice: any;
    @Output() dataStream: EventEmitter<any> = new EventEmitter();

    errorMessage: string;
    model = 'Observable';

    myForm: FormGroup;

    constructor(private orderService: OrderService, private router:Router) {
        this.myForm = new FormGroup({})
    }



    ngOnInit() { this.getOrders() }

    addOrder (order: any) {
        console.log(order);
        if (!order) { return; }
        this.orderService.addOrder(order)
            .subscribe(
                () => this.router.navigate(['/side-modal']),
                error =>  this.errorMessage = <any>error);
        console.log('you submitted: ', order);
        //reset();

    }

    getOrders(){
        this.orderService.getOrders().subscribe((r: any) => {
            console.log(r);
            r.forEach((order) => {
                console.log(order.id, order.size);
                let temp: Array<any> = [];
                order.toppings.forEach((topping: any) => {
                    this.orderService.getTopping(topping).subscribe((toppingObj: any) => {
                        temp.push(toppingObj);
                        order.toppings = temp;
                    });
                });
                this.orderService.getSize(order.size).subscribe((size: any) => {
                    order.size = size;
                });
                this.orderService.getCrust(order.crust).subscribe((crust: any) => {
                    order.crust = crust;
                    this.orders.push(order);
                });
            });
            console.log(this.orders); // remove me
        });


    }

    //reset(){
    //    this.myForm.reset();
    //}

    summaryStatus(summary){
        return {
            color: !summary.valid && !summary.pristine ? 'red' : 'black'
        }
    }

    emit(topping: any){
        console.log(topping);
        this.dataStream.emit(topping);
    }





}


