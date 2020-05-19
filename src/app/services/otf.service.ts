import { Injectable, OnInit } from '@angular/core';
import { MediaService } from './media.service';;

@Injectable({
  providedIn: 'root'
})
export class OtfService {

  constructor() { }

  toUri = (filename: string) => {
    const formattedFilename = filename.replace(/\//g, '.');
    return `https://s3.amazonaws.com/otf.corneliuses.com/videos/${formattedFilename}.mp4`
  }
}
