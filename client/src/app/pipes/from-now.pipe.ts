import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment/src/moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).fromNow();
  }

}
