import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services';
import { MatDialog } from '@angular/material/dialog';
import { IContactValues } from 'src/app/interfaces';

@Component({
  selector: 'common-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(
    private contact:ContactService,
    private dialog:MatDialog
    ) { }

  ngOnInit() {
    let from = new FormControl();
    let body = new FormControl();
    this.contactForm = new FormGroup({body, from});
    switch(this.contactMethod) {
      case 'text':
        this.fromLabel = "From (your reply number):";
        this.fromPlaceholder = "(123) 456-7890...";
        this.sendMessage = this.contact.sendText;
        break;
      case 'email':
        this.fromLabel = "From (your reply email):";
        this.fromPlaceholder = "you@your-domain.com...";
        this.sendMessage = this.contact.sendEmail;
        break;
      default:
        this.fromLabel = "From:";
        this.fromPlaceholder = "how can I reach you?";
        this.sendMessage = this.contact.sendEmail;
    }
  }

  @Input() contactMethod: string;

  contactForm:FormGroup
  fromLabel:string
  fromPlaceholder:string;
  submitted:boolean;

  sendMessage:Function;
  onSubmit:Function = (values:IContactValues):void => {
    this.sendMessage({
      from: values.from,
      body: values.body
    });
    this.submitted = true;
    this.dialog.closeAll();
  };
  onClose: Function = () => {
    this.dialog.closeAll();
  }
}
