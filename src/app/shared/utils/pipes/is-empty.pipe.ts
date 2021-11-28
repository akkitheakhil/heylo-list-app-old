import { Pipe, PipeTransform } from '@angular/core';
import { isEmptyData } from '../common.utils';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any): boolean {
    return isEmptyData(value);
  }

}
