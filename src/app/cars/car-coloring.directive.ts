import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appCarColoring]'
})
export class ColoringDirective {
    @Input() color: string;

    constructor(private element: ElementRef) {
        console.log(this.element);
        alert('Done');
    }
}
