import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';

import { RailStation, RailODDailyTimetable } from '../models/thsr';

@Injectable({
    providedIn: 'root'
})
export class ThsrService {

    constructor(private http: HttpClient) {
        this.getStations();
    }

    private paddingZero(n: number, length: number): string {
        const s = n.toString();
        return s.padStart(length, '0');
    }

    getStations(): Observable<RailStation[]> {
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/Station?$format=JSON';
        return this.http.get(url).pipe(
            map((stations: RailStation[]) => stations),
            share()
        );
    }

    getTimetables(from: RailStation, to: RailStation, date = new Date()): Observable<RailODDailyTimetable[]> {
        const [year, month, day] = [
            this.paddingZero(date.getFullYear(), 4),
            this.paddingZero(date.getMonth() + 1, 2),
            this.paddingZero(date.getDate(), 2)
        ];
        const formattedDate = `${year}-${month}-${day}`;
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/' +
                    `${from.StationID}/to/${to.StationID}/${formattedDate}?$format=JSON`;
        return this.http.get(url).pipe(
            map((timetables: RailODDailyTimetable[]) => timetables)
        );
    }

}
