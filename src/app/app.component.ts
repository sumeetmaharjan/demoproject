import { Component } from '@angular/core';
import { AppTransportService } from './services/app-transport.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Main Site';
    isDarkMode: boolean;
    constructor (private appTransport: AppTransportService) {
        this.isDarkMode = this.appTransport.darkMode;
        this.appTransport.darkModeEvent.subscribe((change) => {
            this.isDarkMode = change;
        });
    }

    toggleDarkMode () {
        this.appTransport.darkMode = !this.appTransport.darkMode;
        localStorage.setItem('darkMode', this.isDarkMode.toString());
    }
}
