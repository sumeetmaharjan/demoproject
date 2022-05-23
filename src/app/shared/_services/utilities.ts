import { differenceInMilliseconds } from 'date-fns';
import { CDate } from 'src/app/model/c-date.model';

// Wait for x amount of time before executing a code
export function sleep (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// Generate a random number between min (inclusive) and max (inclusive)
export function randomNumberBetween (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Get all the the values in the object
export function pluck (array: any, key: any) {
    return array.map((item: any) => item[key]);
}
// Group all the values in the object by key
export function groupBy (array: any, key: any) {
    return array.reduce((group: any, element: any) => {
        const keyValue = element[key];
        return {
            ...group,
            [keyValue]: [...(group[keyValue] ?? []), element]
        };
    }, {});
}
// Countdown to the future date
export function countDownToFutureDate (future: Date): CDate | null {
    const current = new Date();
    const diff = differenceInMilliseconds(future, current);
    if (diff < 0) {
        return null;
    }
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor(diff / (1000 * 60 * 60));
    const minute = Math.floor(diff / (1000 * 60));
    const second = Math.floor(diff / 1000);
    const da = day;
    const hr = hour - day * 24;
    const min = minute - hour * 60;
    const sec = second - minute * 60;
    return {
        days: da < 10 ? '0' + da : '' + da,
        hours: hr < 10 ? '0' + hr : '' + hr,
        minutes: min < 10 ? '0' + min : '' + min,
        seconds: sec < 10 ? '0' + sec : '' + sec
    } as CDate;
}
