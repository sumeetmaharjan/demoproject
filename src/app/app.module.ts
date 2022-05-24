import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogModule } from '@components/blog/blog.module';
import { PortfolModule } from '@components/portfol/portfol.module';
import { ProjectModule } from '@components/project/project.module';
import { TasksModule } from '@components/tasks/tasks.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, LayoutModule, BlogModule, ProjectModule, TasksModule, PortfolModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
