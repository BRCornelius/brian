import { Pipe, PipeTransform } from '@angular/core';
import { IInstruction } from '../utilities';

@Pipe({
  name: 'listOrder'
})
export class ListOrderPipe implements PipeTransform {

  transform(instructions: IInstruction[], args?: any): any {
    if(instructions){
      return instructions.sort((a,b) => {
        if ( a.M.step.N < b.M.step.N ){
          return -1;
        }
        if ( a.M.step.N > b.M.step.N ){
          return 1;
        }
        return 0;
      }).map(step => step.M.instruction.S);
    }
  }

}
