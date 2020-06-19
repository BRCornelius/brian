import { Component, OnInit } from '@angular/core';
import { LegoService } from '../../services';
import { IUrl, ILegoSet } from 'src/app/interfaces';
import { LegoSetPipe, SafePipe } from 'src/app/pipes';

@Component({
  selector: 'lego-page',
  templateUrl: './lego.page.html',
  styleUrls: ['./lego.page.css'],
  providers: [LegoSetPipe, SafePipe]
})
export class LegoPage implements OnInit {

  constructor(
    private lego: LegoService
  ) { }

  instructions: string[];
  sets: ILegoSet[];

  ngOnInit() {
    this.lego.getSets().subscribe(response => {
      // this.sets = JSON.parse(response.body).sets;        // For Production
      this.sets = this.lego.mockData;                        // For Testing
    });
  }

  updateActiveSet: Function = (selectedOption: number): void => {
    this.lego.getInstructions(selectedOption).subscribe(response => {
      const body = JSON.parse(response.body);
      this.instructions = body.instructions.reduce((agg: string[], curr: IUrl, index: number) => {
        if (index % 2 === 0) {
          agg.push(curr.URL);
          return agg;
        } else {
          return agg;
        }
      }, []);
    });
  }
}
