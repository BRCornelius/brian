import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  name: string = "";
  password: string = "";
}

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit() {}
  toggleOpen() {
    this.dialog.open(AuthComponent);
  }
}
