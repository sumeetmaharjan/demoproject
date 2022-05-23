import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dropdownMenuItem]'
})
export class DropdownMenuItemDirective {
    constructor (private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'dropdown-item');
    }
}
