import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'otfUrl'
})
export class OtfUrlPipe implements PipeTransform {

  transform(filename: string): string {
    if(filename){
      const formattedFilename = filename.replace(/\//g, '.');
      return `https://assets.corneliuses.com/videos/OTF/${formattedFilename}.mp4`
    } else {
      return '';
    }
  }
}
