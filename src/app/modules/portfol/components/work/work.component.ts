import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/model/work.model';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
    works: Work[];
    constructor () {
        this.works = [
            {
                title: 'BizVue',
                description:
                    'Project Management software for tracking progress of project and tasks developed using Angular and Asp.Net Core',
                url: 'url',
                image: 'assets/image/biz.png',
                tags: ['Angular', 'Asp.Net Core', 'C#', 'SQL Server', 'Entity Framework', 'Azure']
            },
            {
                title: 'Qkly',
                description: 'Freelancing platform developed using Angular and Asp.Net Core',
                url: 'url',
                image: 'assets/image/qkly.png',
                tags: ['Angular', 'Asp.Net Core', 'C#', 'SQL Server', 'Entity Framework', 'Azure']
            },

            {
                title: 'BrodServ',
                description: 'A Platform that connects Installers and Home automation business all over USA to the client',
                url: 'url',
                image: 'assets/image/broadserv.png',
                tags: ['Asp.Net MVC5', 'C#', 'SQL Server', 'AWS EC2', 'S3 Bucket']
            },
            {
                title: 'Etegra',
                description:
                    'WPF application that checks validity of data in access database generated by Builder SMS software based on rules on json file',
                url: 'url',
                image: 'image',
                tags: ['WPF', 'C#']
            },
            {
                title: 'Vonage for Skype for Business',
                description:
                    'SIP client that attaches itself beside the Skype For Business window and intercepts the call initiated by S4B and uses Vonage to connect',
                url: 'url',
                image: 'image',
                tags: ['UWP', 'C#']
            }
        ];
    }

    ngOnInit (): void {}
}