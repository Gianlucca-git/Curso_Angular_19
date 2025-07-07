import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'creatorCase'
})
export class CreatorCasePipe implements PipeTransform {
  transform(value: number): string {
    return value == 0 ? 'DC' : value == 1 ? 'Marvel' : 'None';
  }
}
