import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(hero: Hero[], sortBy: keyof Hero | null): Hero[] {
    if (!sortBy) {
      return hero;
    }

    switch (sortBy) {
      case 'name':
        return hero.sort(
          (a, b) => a.name.localeCompare(b.name),
        );
      case "canFly":
        return hero.sort(
          (a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1),
        );
      case "color":
        return hero.sort(
          (a, b) => a.color - b.color,
        );
      case "creator":
        return hero.sort(
          (a, b) => a.creator - b.creator,
        )
      default:
        return hero;
    }
  }
}
