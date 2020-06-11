import { Pipe, PipeTransform } from '@angular/core';
import { ILegoSet, IDropdownOption } from '../utilities';

@Pipe({
  name: 'legoSet'
})
export class LegoSetPipe implements PipeTransform {

  transform(legoSetArray: ILegoSet[]): IDropdownOption[] {
    if(legoSetArray) {
      return legoSetArray.map(set => ({
        title: set.name,
        value: set.setID,
        image: set.image.thumbnailURL
      }));;
    } else {
      return [];
    }
  }

}
