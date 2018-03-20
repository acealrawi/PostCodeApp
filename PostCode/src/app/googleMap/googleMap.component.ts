import { Component } from '@angular/core';
import { PostCodeService } from '../Services/postCode.service';

@Component({
    selector: 'googleMap',
    templateUrl: 'googleMap.component.html',
    styleUrls: ['googleMap.component.css'],
})
export class GoogleMapComponent {
    coordinates: number[];
    constructor(private postCodeService: PostCodeService){
        this.postCodeService.showOnMap.subscribe(data => {
            this.coordinates = data;
            this.lng = this.coordinates[0];
            this.lat = this.coordinates[1];
        });
    }
    title = 'My first AGM project';
    lng = 7.809007;
    lat = 51.678418;
    zoom = 20;
    zoomsArray = [
        10,
        15,
        20,
      ];
}