import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ThsrService } from '../../services/thsr.service';

import { RailStation, RailODDailyTimetable } from '../../models/thsr';


@Component({
    selector: 'app-thsr',
    templateUrl: './thsr.component.html',
    styleUrls: ['./thsr.component.scss']
})
export class ThsrComponent implements OnInit {

    private date: string;
    private stations: Observable<RailStation[]>;
    private timetables: Observable<RailODDailyTimetable[]>;

    public stationFrom: RailStation;
    public stationTo: RailStation;
    public searchType: string;

    constructor(private thsrService: ThsrService) {
        this.stations = this.thsrService.getStations();

        const now = new Date();
        now.setHours(now.getHours() - now.getTimezoneOffset() / 60);
        this.date = now.toISOString().slice(0, 16);
    }

    ngOnInit() {
        this.thsrService.getStations().subscribe(res => {
            console.log(res);
        });
    }

    private reverse() {
        const tmp = this.stationFrom;
        this.stationFrom = this.stationTo;
        this.stationTo = tmp;
    }

    private search() {
        if (!this.stationFrom || !this.stationTo) {
            return;
        }

        this.timetables = this.thsrService.getTimetables(this.stationFrom, this.stationTo, new Date(this.date)).pipe(
            map(tables => {
                const compareFn = (a: RailODDailyTimetable, b: RailODDailyTimetable): number => {
                    const x = new Date(a.TrainDate + ' ' + a.OriginStopTime.DepartureTime),
                          y = new Date(b.TrainDate + ' ' + b.OriginStopTime.DepartureTime);
                    if (x === y) {
                        return 0;
                    } else if (x > y) {
                        return 1;
                    } else {
                        return -1;
                    }
                };

                const filterFn = (x: RailODDailyTimetable): boolean => {
                    if (this.searchType === '出發') {
                        return new Date(x.TrainDate + ' ' + x.OriginStopTime.DepartureTime) >= new Date(this.date);
                    } else if (this.searchType === '抵達') {
                        return new Date(x.TrainDate + ' ' + x.DestinationStopTime.ArrivalTime) <= new Date(this.date);
                    }
                };

                return tables.filter(filterFn).sort(compareFn);
            }),
        );
    }

}
