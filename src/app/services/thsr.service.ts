import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThsrService {

    constructor() { }

    getStations() {
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/Station?$format=JSON';
    }
}
