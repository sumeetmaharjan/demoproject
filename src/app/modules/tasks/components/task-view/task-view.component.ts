import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
    taskValue = '';
    tasksList = localStorage.getItem('tasksList') ? JSON.parse(localStorage.getItem('tasksList')!) : [];
    taskListCompleted = localStorage.getItem('tasksListCompleted') ? JSON.parse(localStorage.getItem('tasksListCompleted')!) : [];
    constructor () {}

    ngOnInit (): void {}
    onEnterPress () {
        console.log(this.taskValue);
        if (this.taskValue.trim().length > 0) {
            this.tasksList = [...this.tasksList, this.taskValue];
            localStorage.setItem('tasksList', JSON.stringify(this.tasksList));
            this.taskValue = '';
        }
    }

    onClicked (index: number) {
        const taskToRemove = this.tasksList.find((task: any, i: number) => i === index);
        this.taskListCompleted = [...this.taskListCompleted, taskToRemove];
        localStorage.setItem('tasksListCompleted', JSON.stringify(this.taskListCompleted));
        this.tasksList = this.tasksList.filter((x: any) => x !== taskToRemove);
        localStorage.setItem('tasksList', JSON.stringify(this.tasksList));
    }

    onClearAll () {
        this.tasksList = [];
        this.taskListCompleted = [];
        localStorage.setItem('tasksList', JSON.stringify(this.tasksList));
        localStorage.setItem('tasksListCompleted', JSON.stringify(this.taskListCompleted));
    }

    onDownloadTodo () {
        const tasksList = this.tasksList.join('\n');
        const tasksListCompleted = this.taskListCompleted.join('\n');
        const textToSave = `Todo\n\n${tasksList}\n\n\n\nCompleted\n\n${tasksListCompleted}`;
        const blob = new Blob([textToSave], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.download = 'todo.txt';
        anchor.href = window.URL.createObjectURL(blob);
        anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
        anchor.click();
    }
}
