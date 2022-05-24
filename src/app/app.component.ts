import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppTransportService } from './services/app-transport.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isDarkMode: boolean;
    constructor (private appTransport: AppTransportService, private router: Router) {
        this.isDarkMode = this.appTransport.darkMode;
        this.appTransport.darkModeEvent.subscribe((change) => {
            this.isDarkMode = change;
        });
    }

    toggleDarkMode () {
        this.appTransport.darkMode = !this.appTransport.darkMode;
        localStorage.setItem('darkMode', this.isDarkMode.toString());
    }

    scrollToView (id: string) {
        this.router.navigate(['/']).then(() => {
            const element = document.querySelector('#' + id)!;
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}
