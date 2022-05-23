import { Component, OnInit } from '@angular/core';
import { TimeZoneConstant } from 'src/app/core/constants/timezone.constant';

@Component({
    selector: 'app-analog-clock',
    templateUrl: './analog-clock.component.html',
    styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
    timezoneList = TimeZoneConstant.TIMEZONE_LIST;
    dateNepal: Date = new Date();
    ngOnInit (): void {
        this.dateNepal = new Date(
            new Date().toLocaleString('en-US', { timeZone: this.timezoneList.find((x) => x.name === 'Kathmandu')!.timezone })
        );
    }
}
