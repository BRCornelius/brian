import { Component, OnInit } from '@angular/core';
import { LegoService } from '../../services';
import { IDropdownOption } from 'src/app/utilities';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.page.html',
  styleUrls: ['./lego.page.css']
})
export class LegoPage implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
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
      this.instructions = body.instructions.map(instruction => this.sanitizer.bypassSecurityTrustResourceUrl(instruction.URL));
      console.log(this.instructions);
    })
  };
}
