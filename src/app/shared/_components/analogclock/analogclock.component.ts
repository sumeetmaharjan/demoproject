import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { addSeconds } from 'date-fns';

@Component({
    selector: 'app-analogclock',
    templateUrl: './analogclock.component.html',
    styleUrls: ['./analogclock.component.scss']
})
export class AnalogclockComponent implements OnInit {
    @ViewChild('secondHand', { static: true }) secondHand: any;
    @ViewChild('minuteHand', { static: true }) minuteHand: any;
    @ViewChild('hourHand', { static: true }) hourHand: any;
    @Input() date = new Date();

    ngOnInit (): void {
        setInterval(() => {
            this.updateClock();
        }, 1000);
    }

    updateClock () {
        this.date = addSeconds(this.date, 1);
        const seconds = this.date.getSeconds();
        const minutes = this.date.getMinutes();
        const hours = this.date.getHours();
        const secondsDeg = (seconds / 60) * 360 - 90;
        const minutesDeg = (minutes / 60) * 360 - 90;
        const hoursDeg = (hours / 12) * 360 - 90;
        this.secondHand.nativeElement.style.transform = `rotate(${secondsDeg}deg)`;
        this.minuteHand.nativeElement.style.transform = `rotate(${minutesDeg}deg)`;
        this.hourHand.nativeElement.style.transform = `rotate(${hoursDeg}deg)`;
        // this.secondHand.nativeElement.style.transform = `rotate(${this.getSeconds()}deg)`;
    }
}
