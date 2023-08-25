import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonName'
})
export class SeasonNamePipe implements PipeTransform {

  transform(value: String, name: any): String {
    let x= value.slice(0,1)[0]
    if(x=='Season')
      return value;
    else{
      return name;
    }
  }

}
