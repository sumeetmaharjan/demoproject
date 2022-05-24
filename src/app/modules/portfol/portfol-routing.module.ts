import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortComponent } from './components/port/port.component';

const routes: Routes = [
    {
        path: '',
        component: PortComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolRoutingModule {}
