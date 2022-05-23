import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuItemDirective } from './_directives/dropdown/dropdown-menu-item.directive';
import { DropdownTogglerDirective } from './_directives/dropdown/dropdown-toggler.directive';
import { DropdownMenuDirective } from './_directives/dropdown/dropdown-menu.directive';
import { DropdownDirective } from './_directives/dropdown/dropdown.directive';
import { FilterPipe } from './_pipes/filter.pipe';
import { AnalogclockComponent } from './_components/analogclock/analogclock.component';

@NgModule({
    declarations: [
        AnalogclockComponent,

        DropdownMenuItemDirective,
        DropdownMenuDirective,
        DropdownTogglerDirective,
        DropdownDirective,

        FilterPipe
    ],
    imports: [CommonModule],
    exports: [
        AnalogclockComponent,

        DropdownMenuItemDirective,
        DropdownMenuDirective,
        DropdownTogglerDirective,
        DropdownDirective,

        FilterPipe
    ]
})
export class SharedModule {}
