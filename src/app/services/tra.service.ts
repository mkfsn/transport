import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RawRailStation, RailStation, RawRailODDailyTimetable, RailODDailyTimetable } from '../models/tra';

import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TraService {

    constructor(private http: HttpClient) {
        this.getStations();
    }

    private paddingZero(n: number, length: number): string {
        const s = n.toString();
        return s.padStart(length, '0');
    }

    getStations(): Observable<RailStation[]> {
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$format=JSON';
        return this.http.get(url).pipe(
            map((results: RawRailStation[]) => results.map(r => new RailStation(r))),
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
        const url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/' +
                    `${from.StationID}/to/${to.StationID}/${formattedDate}?$format=JSON`;
        return this.http.get(url).pipe(
            map((results: RawRailODDailyTimetable[]) => results.map(r => new RailODDailyTimetable(r)))
        );
    }
}
