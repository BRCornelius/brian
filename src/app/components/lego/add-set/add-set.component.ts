import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILegoSetNumber } from 'src/app/interfaces';
import { LegoService } from 'src/app/services';

@Component({
  selector: 'lego-add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})
export class AddSetComponent implements OnInit {

  constructor(private lego: LegoService) { }

  addSetForm: FormGroup;
  errorMessage: string;
  hasErrors: boolean;
  setAdded: boolean;

  ngOnInit() {
    const setNumber = new FormControl();
    this.addSetForm = new FormGroup({ setNumber });
    this.setAdded = false;
  }

  onSubmit: Function = (values: ILegoSetNumber): void => {
    this.lego.addSet(values).subscribe((res: any): void => {
      if (res.errorType === 'TypeError') {
        this.errorMessage = 'Please check the set and version number and resubmit.';
        this.hasErrors = true;
      } else if (res.StatusCode === 200) {
        this.setAdded = true;
      } else {
        console.log(res);
      }
  });
  }
  toggleSetAddedFalse: Function = (): void => {
    this.setAdded = false;
    this.hasErrors = false;
  }
}
