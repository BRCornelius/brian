import { Pipe, PipeTransform } from '@angular/core';
import { IKidsVideo, IFormattedKidsVideo } from '../utilities';

@Pipe({
  name: 'kidsVideo'
})
export class KidsVideoPipe implements PipeTransform {

  transform(kidsVideos: any): any {
    if(kidsVideos){
      return kidsVideos.map((video: IKidsVideo): IFormattedKidsVideo => ({
        title: video.TITLE.S,
        thumbnail: video.THUMBNAIL.S,
        url: video.URL.S
      }))
    } else {
      return [];
    }
  }
}
