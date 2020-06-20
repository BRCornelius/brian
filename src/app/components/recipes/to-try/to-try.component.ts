import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipe-to-try',
  templateUrl: './to-try.component.html',
  styleUrls: ['./to-try.component.css']
})
export class ToTryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() title: string;
  @Input() url: string;

  navigate: Function = (): void => {
    const win = window.open(this.url, '_blank');
    win.focus();
  }
}
