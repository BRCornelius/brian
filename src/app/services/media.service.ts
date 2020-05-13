import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  videos = ajax('https://services.corneliuses.com/get-kids-videos');
}
