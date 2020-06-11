import { Pipe, PipeTransform } from '@angular/core';
import { IOTFVideo, IFormattedOTFVideo } from '../utilities';

@Pipe({
  name: 'otfVideo'
})
export class OtfVideoPipe implements PipeTransform {

  transform(otfVideos: IOTFVideo[]): IFormattedOTFVideo[] {
    if(otfVideos){
      return otfVideos.map((video: IOTFVideo): IFormattedOTFVideo => ({
        title: video.TITLE.S,
        category: video.CAT.S,
        group: video.GRP.S
      }));
    } else {
      return [];
    }
  }
}
