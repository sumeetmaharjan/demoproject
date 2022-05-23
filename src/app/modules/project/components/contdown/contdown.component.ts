import { Component, OnInit } from '@angular/core';
import { countDownToFutureDate } from '@shared/_services/utilities';
import { addHours, addMinutes, differenceInSeconds } from 'date-fns';
import { CDate } from 'src/app/model/c-date.model';

@Component({
    selector: 'app-contdown',
    templateUrl: './contdown.component.html',
    styleUrls: ['./contdown.component.scss']
})
export class ContdownComponent implements OnInit {
    date!: CDate;
    interval: any;
    hour!: number;
    minute!: number;
    constructor () {}

    ngOnInit (): void {
        console.log('Init');

        const dateFromLocalStorage = localStorage.getItem('countdowndate');
        const pDate: Date = new Date();
        if (!dateFromLocalStorage) return;
        const parsedDate = new Date(dateFromLocalStorage!);
        const dateDiff = differenceInSeconds(pDate, parsedDate);
        // debugger;
        if (dateDiff > 0) return;
        this.startCountDown(parsedDate);
    }

    onResetClicked () {
        clearInterval(this.interval);
        localStorage.removeItem('countdowndate');
        this.date = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        };
    }

    onStartClicked () {
        clearInterval(this.interval);
        if (this.hour === 0 && this.minute === 0) {
            this.generateFiveMinute(0, 5);
            return;
        }
        this.generateFiveMinute(this.hour, this.minute);
    }

    private generateFiveMinute (hr: number = 0, min: number = 0) {
        let pDate = addMinutes(new Date(), min);
        pDate = addHours(pDate, hr);
        localStorage.setItem('countdowndate', pDate.toString());
        this.startCountDown(pDate);
        this.hour = 0;
        this.minute = 0;
    }

    private startCountDown (date: Date) {
        this.interval = setInterval(() => {
            this.date = countDownToFutureDate(date) as CDate;
            if (!this.date) {
                clearInterval(this.interval);
            }
        }, 1000);
    }
}
