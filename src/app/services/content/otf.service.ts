import { Injectable, OnInit } from '@angular/core';
import { IFormattedOTFVideo, IOTFVideo, IOptions } from '../../utilities';

@Injectable({
  providedIn: 'root'
})
export class OtfService {

  constructor() { }

  categories: string[] = ['Endurance', 'Mayhem', 'Power', 'Strength'];
  groups: string[] = ['Back', 'Chest', 'Legs', '??'];
  options: IOptions[] = [{
    title: 'Category',
    options: this.categories,
  }, {
    title: 'Group',
    options: this.groups,
  }]
}
