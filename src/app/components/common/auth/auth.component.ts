import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../services';

@Component({
  selector: 'common-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  hasErrors = false;
  name = '';
  password = '';

  ngOnInit() {}

  onSubmit: Function = (): void => {
    this.auth.credentials = { name: this.name, password: this.password};
    this.auth.authenticate().subscribe((res: any) => {
      if (res.body) {
        document.cookie = res.body;
        this.data.handleAuthenticated();
        this.auth.isAuthorized();
        this.dialog.closeAll();
      } else {
        this.hasErrors = true;
      }
    });
  }
  onCancel: Function = (): void => {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'common-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {

  constructor(private dialog: MatDialog) {}

  @Output() onAuthenticate: EventEmitter<{}> = new EventEmitter();

  handleAuthenticated: Function = () => this.onAuthenticate.emit(true);

  toggleOpen: Function = (): MatDialogRef<AuthComponent> =>
    this.dialog.open(AuthComponent, {
      data: {
        handleAuthenticated: this.handleAuthenticated
      }
    })
}
