import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], serchValue: number): any {

    if (!serchValue || !value) {
      return value;
    }


    return value.filter(v => {
      v.price == serchValue
    })

  }

}
