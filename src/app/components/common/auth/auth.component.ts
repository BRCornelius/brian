import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/site/auth.service';

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

  ngOnInit() {}

  hasErrors: boolean = false;
  name: string = "";
  password: string = "";

  onSubmit: Function = (): void => {
    this.auth.credentials = { name: this.name, password: this.password};
    this.auth.authenticate().subscribe((res: any) => {
      if(res.body) {
        document.cookie=res.body
        this.data.successFn();
        this.dialog.closeAll();
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
  selector: 'common-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {

  constructor(private dialog: MatDialog) {}

  @Input() successFn: Function;

  toggleOpen: Function = (): MatDialogRef<AuthComponent> =>
    this.dialog.open(AuthComponent, {
      data: {
        successFn: this.successFn
      }
    });
}
