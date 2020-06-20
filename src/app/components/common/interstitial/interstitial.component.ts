import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.css']
})
export class InterstitialComponent implements OnInit {

  constructor() { }

  @Input() topic: string;

  options = {
    carey: 'https://assets.corneliuses.com/photos/common/interstitial-typing.gif',
    lenny: 'https://assets.corneliuses.com/photos/common/interstitial-lenny.gif',
    syd: 'https://assets.corneliuses.com/photos/common/interstitial-syd.gif'
  };

  src: string =
    this.options[this.topic]
    ? this.options[this.topic]
    : 'https://assets.corneliuses.com/photos/common/interstitial-duncan.gif';

  ngOnInit() {}
}
