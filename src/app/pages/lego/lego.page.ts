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
    this.lego.getInstructions(29794).subscribe(response => {
      const body = JSON.parse(response.body);
      console.log(body)
      this.instructions = body.instructions.map(instruction => this.safe.transform('https://s3.amazonaws.com/photos.corneliuses.com/lego/SCIPAB+Pocket+Prompt+FINAL.pdf', 'resourceUrl'));
      console.log(this.instructions);
    })
  }

  instructions: string[];
  sets: IDropdownOption[];

  updateActiveSet: Function = (selectedOption: number): void => {
    this.lego.getInstructions(selectedOption).subscribe(response => {
      const body = JSON.parse(response.body);
      this.instructions = body.instructions.map(instruction => 'https://s3.amazonaws.com/photos.corneliuses.com/lego/SCIPAB+Pocket+Prompt+FINAL.pdf');
      console.log(this.instructions);
    })
  };
}
