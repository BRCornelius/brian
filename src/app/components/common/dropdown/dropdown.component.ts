import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selectOption: Function;
  selectedOption: string;

}
