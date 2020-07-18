import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDisplayComponent, InterstitialComponent } from './components';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent, RadioComponent } from './components/filter';
import { AuthComponent, AuthButtonComponent } from './components/auth/auth.component';
import { ErrorComponent } from './components/error/error.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AuthService } from './services';

@NgModule({
  declarations: [
    AuthButtonComponent,
    AuthComponent,
    DropdownComponent,
    ErrorComponent,
    FilterComponent,
    InterstitialComponent,
    RadioComponent,
    VideoDisplayComponent,
  ],
  exports: [
    AuthButtonComponent,
    AuthComponent,
    DropdownComponent,
    ErrorComponent,
    FilterComponent,
    InterstitialComponent,
    MatGridListModule,
    RadioComponent,
    VideoDisplayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [AuthComponent]
})
export class SharedModule { }
