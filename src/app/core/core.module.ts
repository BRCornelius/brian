import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {
  ContactComponent,
  ContactButtonComponent,
  ContactFormComponent,
  FooterComponent
} from './components';
import { ContactService, NavigationService } from './services';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactButtonComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  exports: [
    ContactButtonComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ContactService, NavigationService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
