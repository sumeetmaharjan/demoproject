import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './core/layout/full/full.component';

const routes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'projects',
                loadChildren: () => import('./modules/project/project-routing.module').then((m) => m.ProjectRoutingModule)
            },
            {
                path: 'blog',
                loadChildren: () => import('./modules/blog/blog-routing.module').then((m) => m.BlogRoutingModule)
            },
            {
                path: 'tasks',
                loadChildren: () => import('./modules/tasks/tasks-routing.module').then((m) => m.TasksRoutingModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
