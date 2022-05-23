import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SharedModule } from '@shared/shared.module';
import { ContdownComponent } from './components/contdown/contdown.component';
import { FormsModule } from '@angular/forms';
import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';

@NgModule({
    declarations: [ProjectListComponent, ContdownComponent, AnalogClockComponent],
    imports: [CommonModule, ProjectRoutingModule, FormsModule, SharedModule]
})
export class ProjectModule {}
