import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from '../interfaces/hero.interface';

@Pipe({
  name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(hero: Hero[], search: string): Hero[] {
    if (!search) {
      return hero;
    }

    return hero.filter(
      hero => hero.name.toLowerCase().includes(search.toLowerCase()));
  }
}
