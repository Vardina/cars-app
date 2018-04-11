import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appRounding]'
})
export class RoundingDirective {
    @Input() range: string;

    constructor(private element: ElementRef) {
        console.log(this.element);
    }
}
