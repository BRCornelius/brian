import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDisplayComponent, InterstitialComponent } from './components';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent, RadioComponent } from './components/filter';
import { AuthComponent, AuthButtonComponent } from './components/auth/auth.component';
import {
  ContactComponent,
  ContactButtonComponent,
  ContactFormComponent
} from './components/contact';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AuthButtonComponent,
    AuthComponent,
    ContactButtonComponent,
    ContactComponent,
    ContactFormComponent,
    DropdownComponent,
    ErrorComponent,
    FilterComponent,
    FooterComponent,
    InterstitialComponent,
    RadioComponent,
    VideoDisplayComponent,
  ],
  exports: [
    AuthButtonComponent,
    AuthComponent,
    ContactButtonComponent,
    ContactComponent,
    ContactFormComponent,
    DropdownComponent,
    ErrorComponent,
    FilterComponent,
    FooterComponent,
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [AuthComponent, ContactComponent]
})
export class SharedModule { }
