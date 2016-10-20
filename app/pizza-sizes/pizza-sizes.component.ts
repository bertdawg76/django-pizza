import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Size } from './sizes';
import { SizeService } from '../services/sizes.service';

@Component({
    moduleId: module.id,
    selector: 'pizza-size',
    templateUrl: './pizza-sizes.component.html',
    styleUrls: ['pizza-sizes.component.css']
})
export class PizzaSizeComponent implements OnInit {
    sizes: Size[];
    @Output() dataStream: EventEmitter<any> = new EventEmitter();

    errorMessage: string;
    mode = 'Observable';

    constructor(private sizeService: SizeService) {}

    ngOnInit() { this.getSize(); }

    emit(size: any) {
        this.dataStream.emit(size);
    }

    getSize(){
        this.sizeService.getSize()

            .subscribe(
                sizes => this.sizes = sizes,
                error => this.errorMessage = <any>error


            )

    }
}