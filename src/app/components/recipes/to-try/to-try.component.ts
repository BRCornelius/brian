import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipe-to-try',
  templateUrl: './to-try.component.html',
  styleUrls: ['./to-try.component.css']
})
export class ToTryComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() url: string;

  ngOnInit() {}

  navigate: Function = (): void => {
    const win = window.open(this.url, '_blank');
    win.focus();
  }
}
