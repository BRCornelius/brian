import { Component, OnInit } from '@angular/core';
import { LegoService } from '../../services';
import { ILegoSet } from 'src/app/utilities';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.page.html',
  styleUrls: ['./lego.page.css']
})
export class LegoPage implements OnInit {

  constructor(private lego: LegoService) { }

  ngOnInit() {
    this.lego.getSets().subscribe(response => {
      const rawSets = JSON.parse(response.body).sets;
      const sets = rawSets.map(set => ({
        title: set.name,
        setID: set.setID,
        image: set.image.thumbnailURL
      }));
      this.sets = sets;
    });
  }

  sets: ILegoSet[];
}
