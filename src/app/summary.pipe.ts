import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}

// transform(value: unknown, limit? : number): unknown {
//   if(!value) return null;
//   limit= (limit) ? limit : 5 ;
//    return value.substr(0,limit);
//  }