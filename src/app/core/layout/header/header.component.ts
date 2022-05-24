import { Component, OnInit } from '@angular/core';
import { AppTransportService } from 'src/app/services/app-transport.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isDarkMode: boolean;
    constructor (private appTransport: AppTransportService) {
        this.isDarkMode = this.appTransport.darkMode;
        this.appTransport.darkModeEvent.subscribe((change) => {
            this.isDarkMode = change;
        });
    }

    ngOnInit (): void {}

    toggleDarkMode () {
        this.appTransport.darkMode = !this.appTransport.darkMode;
        localStorage.setItem('darkMode', this.isDarkMode.toString());
    }
}
