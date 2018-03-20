import { Component, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSlideToggleChange, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostCodeService } from '../Services/postCode.service';
import { RootObject } from '../Models/postCodeModel';

@Component({
    selector: 'postCode',
    templateUrl: './postCode.component.html',
    styleUrls: ['./postCode.component.css']
})
export class PostCodeComponent {
    constructor(
        private postCodeService: PostCodeService) {

    }
    tooMuchInfo: RootObject;
    postcode: string;
    houseNumber: number;


    onSubmit() {
        this.postCodeService.getAddressByPostCodeAndHouseNumber(this.postcode, this.houseNumber)
        .subscribe(data => {
            console.log(data);
            this.tooMuchInfo = data;
            this.postCodeService.showOnMap.emit(this.tooMuchInfo._embedded.addresses[0].geo.center.wgs84.coordinates);
        });
    }

}
