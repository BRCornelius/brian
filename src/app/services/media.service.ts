import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  kidsVideos: Observable<any> = ajax('https://services.corneliuses.com/get-kids-videos');
  otfVideos: Observable<any> = ajax('https://services.corneliuses.com/get-otf');
}
