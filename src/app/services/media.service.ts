import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  kidsVideos = ajax('https://services.corneliuses.com/get-kids-videos');
  otfVideos = ajax('https://services.corneliuses.com/get-otf');
}
