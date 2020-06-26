import { Component, Input } from '@angular/core';
import { OtfUrlPipe } from 'src/app/pipes';

@Component({
  selector: 'workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css'],
  providers: [OtfUrlPipe]
})
export class WorkoutCardComponent {

  constructor() { }

  @Input() title: string;
  @Input() grp: string;
  @Input() cat: string;

}
