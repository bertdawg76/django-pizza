import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crust } from './pizza-crusts';
import { CrustService } from '../services/crust.service';

@Component({
    moduleId: module.id,
    selector: 'crust-type',
    templateUrl: './pizza-crusts.component.html',
    styleUrls: ['pizza-crusts.component.css']
})
export class PizzaCrustComponent implements OnInit {
    crusts: Crust[];
    @Output() dataStream: EventEmitter<any> = new EventEmitter();

    errorMessage: string;
    mode = 'Observable';

    constructor(private crustService: CrustService) {}

    ngOnInit() { this.getCrust(); }

    emit(size: any) {
        this.dataStream.emit(size);
    }

    getCrust(){
        this.crustService.getCrust()

            .subscribe(
                crusts => this.crusts = crusts,
                error => this.errorMessage = <any>error


            )

    }
}