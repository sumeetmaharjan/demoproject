import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[dropdown]'
})
export class DropdownDirective implements OnChanges {
    @Input('customDropdownClass') customClass: string = '';
    @Input('dissmissOnClickOutside') dissmissOnClickOutside: boolean = true;
    @HostBinding('class.dd-show') isOpen = false;
    // @HostListener('click', ['$event']) toggleOpen(event: Event) {}
    private _event;

    // eslint-disable-next-line no-useless-constructor
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'dropdown');

        this._event = this.globalEvent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.dissmissOnClickOutside.currentValue) {
            // Unlisten to previous event
            this._event();
            // Listen to new event
            this._event = this.globalEvent();
        }
    }

    private localEvent() {
        return this.renderer.listen(this.el.nativeElement, 'click', (event: Event) => {
            this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
            const item = this.el.nativeElement.querySelector('.dropdown-menu');
            if (this.isOpen) {
                this.addClass(item);
            } else {
                this.removeClass(item);
            }
        });
    }

    private globalEvent() {
        return this.renderer.listen('document', 'click', (event: Event) => {
            this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
            const item = this.el.nativeElement.querySelector('.dropdown-menu');
            if (this.isOpen) {
                this.addClass(item);
            } else {
                this.removeClass(item);
            }
        });
    }

    private addClass(item: any) {
        this.renderer.addClass(item, 'dd-show');
        if (this.customClass !== '') {
            this.renderer.addClass(this.el.nativeElement, this.customClass);
        }
    }

    private removeClass(item: any) {
        this.renderer.removeClass(item, 'dd-show');
        if (this.customClass !== '') {
            this.renderer.removeClass(this.el.nativeElement, this.customClass);
        }
    }
}
