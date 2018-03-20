import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { RootObject } from '../Models/postCodeM';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class PostCodeService {

    constructor(private httpClient: HttpClient) { }
    private url = 'https://api.postcodeapi.nu/v2/';

    httpOptions = {
        headers: new HttpHeaders({
          'X-Api-Key': 'nqcCudwjsw5XLXz8rYtNT1tSaQKyw1cC2kyEaiDT'
        })
    };
    showOnMap: EventEmitter<any> = new EventEmitter();

    getAddressByPostCodeAndHouseNumber(postCode: string , houseNumber: number ) {
        return this.httpClient.get<any>(this.url + 'addresses/' + '?postcode=' + postCode + '&number=' + houseNumber, this.httpOptions);
    }
    getByPostCodeArea(postCodeArea: number) {
        return this.httpClient.get<any>(this.url + 'postcodes/' + '?postcodeArea=' + postCodeArea, this.httpOptions);
    }

    getByPostCode(postCode: string) {
        return this.httpClient.get<any>(this.url + '?ostcodes/' + '?postcode=' + postCode, this.httpOptions);
    }

}
