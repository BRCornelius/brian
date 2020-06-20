import { Component, OnInit, Input } from '@angular/core';
import { OtfService } from 'src/app/services';
import { OtfUrlPipe } from 'src/app/pipes';

@Component({
  selector: 'workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css'],
  providers: [OtfUrlPipe]
})
export class WorkoutCardComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() grp: string;
  @Input() cat: string;

  ngOnInit() {}
}
