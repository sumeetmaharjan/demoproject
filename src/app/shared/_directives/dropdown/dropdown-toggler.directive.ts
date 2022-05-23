import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dropdownToggler]'
})
export class DropdownTogglerDirective {
    constructor (private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'cursor-pointer');
    }
}
