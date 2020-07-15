import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor() { }

  @Input() allowLogin: boolean;
  @Input() text: string;
}
