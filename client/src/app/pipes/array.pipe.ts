import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let results = [];
    for(let item in value){
      results.push({ key: item, value: value[item]});
    }
    return results;
  }

}
