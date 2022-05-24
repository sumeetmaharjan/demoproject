import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolRoutingModule } from './portfol-routing.module';
import { PortComponent } from './components/port/port.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';

@NgModule({
    declarations: [PortComponent, SkillsComponent, WorkComponent],
    imports: [CommonModule, PortfolRoutingModule]
})
export class PortfolModule {}
