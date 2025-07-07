import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'flyCase'
})
export class FlyCasePipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Can Fly' : 'Cannot Fly';
    }
}
