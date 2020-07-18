import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownOption } from '../../models';

@Component({
  selector: 'common-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  constructor() { }

  @Input() dropdownLabel: string;
  @Input() dropdownOptions: IDropdownOption[];

  @Output() handleSelection = new EventEmitter();

  selectedOption: string;

  selectOption: Function = $event => {
    this.handleSelection.emit($event.target.value);
  }
}
