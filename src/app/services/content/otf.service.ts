import { Injectable } from '@angular/core';
import { IFormattedOTFVideo, IOTFVideo, IOptions } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OtfService {

  constructor() { }

  categories: string[] = ['Endurance', 'Heart', 'Mayhem', 'Power', 'Strength'];
  groups: string[] = ['Back', 'Chest', 'Legs', '??'];
  options: IOptions[] = [
    {
      title: 'Category',
      options: this.categories,
    }, {
      title: 'Group',
      options: this.groups,
    }
  ];
}
