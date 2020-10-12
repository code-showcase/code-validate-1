import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

    transform(value: string): string {
        let first = value.substr(0, 1).toUpperCase();
        return first + value.substr(1);

    }


}
