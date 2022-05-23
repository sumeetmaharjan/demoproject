import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';
import { ContdownComponent } from './components/contdown/contdown.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProjectListComponent
            },
            {
                path: 'countdown',
                component: ContdownComponent
            },
            {
                path: 'clock',
                component: AnalogClockComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
