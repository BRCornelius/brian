import { Injectable, OnInit } from '@angular/core';
import { IFormattedOTFVideo, IOTFVideo } from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class OtfService {

  constructor() { }

  formatVideos: Function = (RawOTFVideos: IOTFVideo[]): IFormattedOTFVideo[] => {
    return RawOTFVideos.map((video: IOTFVideo): IFormattedOTFVideo => ({
      title: video.TITLE.S,
      category: video.CAT.S,
      group: video.GRP.S
    }));
  };
  toUri: Function = (filename: string): string => {
    const formattedFilename = filename.replace(/\//g, '.');
    return `https://s3.amazonaws.com/otf.corneliuses.com/videos/${formattedFilename}.mp4`
  }
}
