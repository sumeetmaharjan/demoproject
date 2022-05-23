import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppTransportService {
    private _darkMode: boolean = localStorage.getItem('darkMode') === 'true';
    public get darkMode (): boolean {
        return this._darkMode;
    }

    public set darkMode (value: boolean) {
        this._darkMode = value;
        this.darkModeEvent.next(value);
    }

    darkModeEvent = new Subject<boolean>();
}
