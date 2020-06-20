import { Pipe, PipeTransform } from '@angular/core';
import { IKidsVideo, IFormattedKidsVideo } from '../interfaces';

@Pipe({
  name: 'kidsVideo'
})
export class KidsVideoPipe implements PipeTransform {

  transform(kidsVideos: IKidsVideo[]): IFormattedKidsVideo[] {
    if (kidsVideos) {
      return kidsVideos.map((video: IKidsVideo): IFormattedKidsVideo => ({
        title: video.TITLE.S,
        thumbnail: video.THUMBNAIL.S,
        url: video.URL.S
      }));
    } else {
      return [];
    }
  }
}
