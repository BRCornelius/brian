import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'common-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let from = new FormControl();
    let body = new FormControl();
    this.contactForm = new FormGroup({body, from});
    switch(this.contactMethod) {
      case 'text':
        this.fromLabel = "From (your reply number):";
        this.fromPlaceholder = "(123) 456-7890...";
        break;
      case 'email':
        this.fromLabel = "From (your reply email):";
        this.fromPlaceholder = "you@your-domain.com...";
        break;
      default:
        this.fromLabel = "From:";
        this.fromPlaceholder = "how can I reach you?";
    }
  }

  @Input() contactMethod: string;

  contactForm: FormGroup
  fromLabel: string
  fromPlaceholder: string;
}
