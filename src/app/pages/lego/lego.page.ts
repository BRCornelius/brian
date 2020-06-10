import { Component, OnInit } from '@angular/core';
import { LegoService } from '../../services';
import { IDropdownOption, IURL } from 'src/app/utilities';
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

  ngOnInit() {
    this.lego.getSets().subscribe(response => {
      this.sets = JSON.parse(response.body).sets;
    });
  }

  instructions: string[];
  sets: IDropdownOption[];

  updateActiveSet: Function = (selectedOption: number): void => {
    this.lego.getInstructions(selectedOption).subscribe(response => {
      const body = JSON.parse(response.body);
      this.instructions = body.instructions.reduce((agg: string[], curr: IURL, index: number) => {
        if(index % 2 === 0) {
          agg.push(curr.URL);
          return agg;
        } else {
          return agg;
        }
      }, []);
    })
  };
}
