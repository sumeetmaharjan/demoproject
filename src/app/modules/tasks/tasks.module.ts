import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [TaskViewComponent],
    imports: [CommonModule, TasksRoutingModule, FormsModule]
})
export class TasksModule {}
