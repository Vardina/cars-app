import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'engine'
})
export class EnginePipe implements PipeTransform {
    transform(value: string) {
        switch (value) {
            case 'V type engine':
                return value + ' - V12 configuration';
            case 'Gas engine':
                return value + ' - Type 4 (844-1489kWe)';
            case 'Diesel engine':
                return value + ' - four-stroke cycles';
        }
    }
}
