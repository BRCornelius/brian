import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  kidsVideos = ajax('https://services.corneliuses.com/get-kids-videos');
  otfVideos = this.kidsVideos; /* () => ajax({
    url: 'https://services.corneliuses.com/getexercises',
    method: 'POST',
    body: {
      type: "",
      muscle: ""
    }
  }) */
}
