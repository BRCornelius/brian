import { Component, OnInit } from '@angular/core';
import { LegoService } from '../../services';
import { IDropdownOption } from 'src/app/utilities';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.page.html',
  styleUrls: ['./lego.page.css'],
  providers: [SafePipe]
})
export class LegoPage implements OnInit {

  constructor(
    private safe: SafePipe,
    private lego: LegoService
  ) { }

  ngOnInit() {
    this.lego.getSets().subscribe(response => {
      const rawSets = JSON.parse(response.body).sets;
      const sets = rawSets.map(set => ({
        title: set.name,
        value: set.setID,
        image: set.image.thumbnailURL
      }));
      this.sets = sets;
    });
  }

  instructions: string[];
  sets: IDropdownOption[];

  updateActiveSet: Function = (selectedOption: number): void => {
    this.lego.getInstructions(selectedOption).subscribe(response => {
      const body = JSON.parse(response.body);
      console.log(body.instructions);
      this.instructions = body.instructions.reduce((agg, curr, index) => {
        if(index % 2 === 0) {
          agg.push(this.safe.transform(curr.URL, 'resourceUrl'));
          return agg;
        } else {
          return agg;
        }
      }, []);
    })
  };
}
