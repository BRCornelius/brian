import { Injectable, OnInit } from '@angular/core';
import { IFormattedOTFVideo, IOTFVideo, IOptions } from '../utilities';

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

  formatVideos: Function = (RawOTFVideos: IOTFVideo[]): IFormattedOTFVideo[] => {
    return RawOTFVideos.map((video: IOTFVideo): IFormattedOTFVideo => ({
      title: video.TITLE.S,
      category: video.CAT.S,
      group: video.GRP.S
    }));
  };
  toUri: Function = (filename: string): string => {
    const formattedFilename = filename.replace(/\//g, '.');
    return `https://assets.corneliuses.com/videos/OTF/${formattedFilename}.mp4`
  }
}
