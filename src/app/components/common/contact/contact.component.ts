import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ContactService } from 'src/app/services';
import { IDropdownOption } from 'src/app/interfaces';

@Component({
  selector: 'common-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  contactMethod: string = this.data.contactMethod
  titleCopy: string = this.contactMethod === 'text' ? 'Send a text:' : 'Send an email:';
}

@Component({
  selector: 'common-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent {

  constructor(
    private contact: ContactService,
    private dialog: MatDialog
  ) { }

  contactOptions:IDropdownOption[] = this.contact.contactOptions;
  dropdownLabel: string = "Contact";

  handleSelection:Function = (selection) => this.toggleOpen(selection);
  toggleOpen: Function = (contactMethod): MatDialogRef<ContactComponent> =>
    this.dialog.open(ContactComponent, {
      data: { contactMethod }
    })
}
