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

  constructor(
    private auth: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {}

  hasErrors: boolean = false;
  name: string = "";
  password: string = "";

  onSubmit: Function = (): void => {
    this.auth.credentials = { name: this.name, password: this.password};
    this.auth.authenticate().subscribe(res => {
      if(res.body) {
        document.cookie=res.body
      } else {
        this.hasErrors = true;
      }
    });
  };
  onCancel: Function = (): void => {
    this.dialog.closeAll();
  }
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
