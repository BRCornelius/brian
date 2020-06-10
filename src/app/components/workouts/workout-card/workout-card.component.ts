import { Component, OnInit, Input } from '@angular/core';
import { OtfService } from 'src/app/services';

@Component({
  selector: 'workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent implements OnInit {

  constructor(private otf: OtfService) { }

  ngOnInit() {
    this.id = this.otf.toUri(this.title);
  }

  @Input() title: string;
  @Input() grp: string;
  @Input() cat: string;

  id: string;

}
