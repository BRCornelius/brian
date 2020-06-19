import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownOption } from '../../../interfaces';

@Component({
  selector: 'common-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() dropdownOptions: IDropdownOption[];

  @Output() handleSelection = new EventEmitter();

  selectedOption: string;

  selectOption: Function = () => {
    this.handleSelection.emit(this.selectedOption);
  }
}
