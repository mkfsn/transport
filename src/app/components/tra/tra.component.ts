import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TraService } from '../../services/tra.service';

import { RailStation } from '../../models/tra';
import { RailODDailyTimetable } from '../../models/tra';

@Component({
    selector: 'app-tra',
    templateUrl: './tra.component.html',
    styleUrls: ['./tra.component.scss']
})
export class TraComponent implements OnInit {

    // state
    date: string;
    stations: Observable<RailStation[]>;
    timetables: Observable<RailODDailyTimetable[]>;

    public stationFrom: RailStation;
    public stationTo: RailStation;
    public searchType: string;

    constructor(private traService: TraService) {
        this.stations = this.traService.getStations();
        this.searchType = '出發';

        const now = new Date();
        now.setHours(now.getHours() - now.getTimezoneOffset() / 60);
        this.date = now.toISOString().slice(0, 16);
    }

    ngOnInit() {}

    reverse() {
        const tmp = this.stationFrom;
        this.stationFrom = this.stationTo;
        this.stationTo = tmp;
    }

    search() {
        if (!this.stationFrom || !this.stationTo) {
            return;
        }

        this.timetables = this.traService.getTimetables(this.stationFrom, this.stationTo, new Date(this.date)).pipe(
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
                        return x.OriginStopTime.DepartureTime >= new Date(this.date);
                    } else if (this.searchType === '抵達') {
                        return x.DestinationStopTime.ArrivalTime <= new Date(this.date);
                    }
                };

                const result = tables.filter(filterFn).sort(compareFn);

                result.forEach(v => {
                    if (!v.DailyTrainInfo.TrainTypeName.Zh_tw) {
                        console.log(v);
                    }
                });

                return result;
            }),
        );
    }

    updateStationFrom(station: RailStation) {
        this.stationFrom = station;
    }

    updateStationTo(station: RailStation) {
        this.stationTo = station;
    }

}
