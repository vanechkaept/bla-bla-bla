import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name:  'moment__pipe',
  pure: false,
})

export class MomentPipe implements PipeTransform {
  format =  'MMMM YYYY';
  transform(m: moment.Moment, format?:string): string {

    if(!!format){
      return m.format(format)
    } else {
      return m.format(this.format)
    }

  }
}
