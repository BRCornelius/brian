import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log(this.title, this.grp, this.cat)}

  @Input() title: string;
  @Input() grp: string;
  @Input() cat: string;

}
