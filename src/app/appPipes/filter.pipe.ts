import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, serachTerm:any): any {
    console.log("array value",value);
    console.log("serch  in putvalue",serachTerm);
    
    if(value.length===0){
      return value  //if data did not show in initially then we have put this condition
    }
    return value.filter((search: any)=>{
      return search.name.toLowerCase().indexOf(serachTerm.toLowerCase())>-1
    });
  }

}
