import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-port',
    templateUrl: './port.component.html',
    styleUrls: ['./port.component.scss']
})
export class PortComponent implements OnInit {
    workExperiences: any;
    selectedWorkExperience = 0;
    constructor () {
        this.workExperiences = [
            {
                name: 'Devfinity LLC',
                designation: 'Full Stack Software Engineer',
                joinDate: 'October 2020',
                leaveDate: 'Present',
                responsibilities: [
                    'Development of web using Angular and Asp.Net Core API',
                    'Deployment of application to Azure platform',
                    'Implementation of Azure AdB2C for SSO between multiple domain, SignalR for Messaging and Realtime Notificaiton System, Application Insight for monitoring application',
                    'Experience in Design Pattern like CQRS and Repository Pattern',
                    'Unit Testing in XUnit',
                    'Good understing of Git, NPM and Nuget ecosystem',
                    'Worked in Agile software development methodology and have good understanding of Agile, Scrum and Kanban',
                    'Created freelancing platform Qkly'
                ]
            },
            {
                name: 'Insight Workshop',
                designation: 'Full Stack Software Engineer',
                joinDate: 'June 2018',
                leaveDate: 'September 2020',
                responsibilities: [
                    'Development of Desktop applicaiton using C#, WPF',
                    'Use of Native Windows API for window manipulation',
                    'Created installer for windows (nsis), linux and macOS (electron-builder).',
                    'Use of Powershell script for automating installer creating process',
                    'Deployment to Windows Store',
                    'Created applicaiton that checks validity of data on Microsoft Access Db based on pre-defined rules',
                    'Mantainance of ASP.Net MVC application, optimizing Linq query, hangfire jobs and implementing Swagger',
                    'Created Project Management Platform for a US based companay'
                ]
            },
            {
                name: 'Sparsha Printers',
                designation: 'Graphics Designer [Part-time]',
                joinDate: 'July 2009',
                leaveDate: 'March 2018',
                responsibilities: [
                    'Design broucher, Flyers, Flex and Books layout using Indesign, Illustrator and Freehand',
                    'Image manipulating and retouching with Photoshop',
                    'Familiar with different Printers and Printing technology'
                ]
            },
            {
                name: 'Technorio Inc.',
                designation: 'Java Developer [Intern]',
                joinDate: '2016',
                leaveDate: 'less than year',
                responsibilities: ['Created Inventory management system for Pharmacy', 'Research and Learning Java and JavaFX']
            },
            {
                name: 'Ecom Traders',
                designation: 'Computer Technician',
                joinDate: 'August 2011',
                leaveDate: 'January 2012',
                responsibilities: [
                    'Maintainence of Computer Hardware and Networking',
                    'Recover corrupt data using different tools',
                    'Windows System upgrade and recovery and troubleshooting'
                ]
            }
        ];
    }

    ngOnInit (): void {}
    onSelectedWorkExperience (ind: number) {
        this.selectedWorkExperience = ind;
    }

    downloadResume () {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'assets/pdf/SumeetMaharjan_Resume.pdf');
        link.setAttribute('download', 'products.csv');
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}
