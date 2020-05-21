import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  name: string = "";
  password: string = "";

  onSubmit: Function = () => {
    this.auth.credentials = { name: this.name, password: this.password};
    this.auth.authenticate().subscribe(res => document.cookie=res.body);
    console.log(document.cookie);
  };
}

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {

  constructor(private dialog: MatDialog) {}

  toggleOpen: Function = (): MatDialogRef<AuthComponent> =>
    this.dialog.open(AuthComponent);
}
