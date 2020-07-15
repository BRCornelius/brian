import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILegoSetNumber } from '../../models';
import { LegoService } from '../../services/lego.service';

@Component({
  selector: 'lego-add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})
export class AddSetComponent implements OnInit {

  constructor(private lego: LegoService) { }

  @Output() updateSetList: EventEmitter<any> = new EventEmitter();

  addSetForm: FormGroup;
  errorMessage: string;
  hasErrors: boolean;
  setAdded: boolean;
  successMessage = 'Set has been added to collection!';

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
      } else {
        this.updateSetList.emit('success');
        this.setAdded = true;
      }
    });
  }
  toggleSetAddedFalse: Function = (): void => {
    this.setAdded = false;
    this.hasErrors = false;
  }
}
