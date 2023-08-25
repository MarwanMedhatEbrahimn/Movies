import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overviewSize'
})
export class OverviewSizePipe implements PipeTransform {

  transform(overview:String, count:number): String {
    let x = overview.split(' ').slice(0,count).join(' '); 
    if(overview.split(' ').length>count){
      return x+" ...";

    }
    return x
  }

}
