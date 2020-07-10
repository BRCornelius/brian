import { Pipe, PipeTransform } from '@angular/core';
import { IInstruction } from '../interfaces';

@Pipe({
  name: 'listOrder'
})
export class ListOrderPipe implements PipeTransform {

  transform(instructions: IInstruction[], args?: any): any {
    if (instructions) {
      return instructions.sort((a, b) => {
        if ( a.step < b.step ) {
          return -1;
        }
        if ( a.step > b.step ) {
          return 1;
        }
        return 0;
      }).map(step => step.instruction);
    }
  }

}
