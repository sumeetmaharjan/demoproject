import { Component, OnInit } from '@angular/core';
import { ProjectConstant } from 'src/app/core/constants/project.constant';
import { Project } from 'src/app/model/project.model';
import { AppTransportService } from 'src/app/services/app-transport.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
    // items = Array(5).fill(1);
    projectList: Project[];
    darkMode;
    searchValue = '';
    constructor (private appTransport: AppTransportService) {
        this.projectList = ProjectConstant.PROJECT_LIST_URL;
        this.darkMode = this.appTransport.darkMode;
        this.appTransport.darkModeEvent.subscribe((change) => {
            this.darkMode = change;
        });
    }

    ngOnInit (): void {}
    onKeyPress (event: any) {
        this.searchValue = event.target.value;
    }
}
