import {Pipe, PipeTransform} from '@angular/core';
import {Color, ColorMap} from '../interfaces/hero.interface';

@Pipe({
  name: 'colorCase'
})
export class ColorCasePipe implements PipeTransform {
  transform(num: number, needColor: boolean = false): string {

    let result = Color[num];
    if (result === undefined) {
      return 'white';
    }

    if (needColor) {
        return ColorMap[num];
    }
    return result;
  }
}
