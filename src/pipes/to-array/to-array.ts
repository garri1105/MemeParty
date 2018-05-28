import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray',
})
export class ToArrayPipe implements PipeTransform {
  /**
   * Takes a JSON object and turns its values into an array
   */
  transform(value: any, ...args): any[] {
    if (value) {
      let array = [];
      for (const [, val] of Object.entries(value)) {
        array.push(val);
      }

      return array;
    }
  }
}
