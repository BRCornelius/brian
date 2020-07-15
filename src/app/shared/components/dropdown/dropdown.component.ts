import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownOption } from 'src/app/core';

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
