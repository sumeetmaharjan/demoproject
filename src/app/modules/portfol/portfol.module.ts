import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolRoutingModule } from './portfol-routing.module';
import { PortComponent } from './components/port/port.component';

@NgModule({
    declarations: [PortComponent],
    imports: [CommonModule, PortfolRoutingModule]
})
export class PortfolModule {}
