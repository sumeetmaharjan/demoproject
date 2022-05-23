import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dropdownMenu]'
})
export class DropdownMenuDirective {
    constructor (private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'dropdown-menu');
    }
}
