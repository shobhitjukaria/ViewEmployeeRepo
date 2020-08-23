import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, eName: string): any {
    if(eName===""){
      return value;
    }
    const employeeArray:any[]=[];
    for(let i=0;i<=value.length-1;i++){
      console.log(value[i])
      console.log(value[i].company)
      let empName:string=value[i].f_name;

      if(empName.match(eName)) {
        employeeArray.push(value[i])
      }
    }
    return employeeArray;
  }

}
