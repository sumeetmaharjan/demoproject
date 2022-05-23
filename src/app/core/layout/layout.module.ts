import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [FullComponent, HeaderComponent, SidebarComponent],
    imports: [CommonModule, AppRoutingModule]
})
export class LayoutModule {}
