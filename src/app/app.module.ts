import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AuthComponent,
  AuthButtonComponent,
  ContentToggleComponent,
  ErrorComponent,
  FooterComponent,
  NavigationComponent,
  RadioComponent,
  DropdownComponent,
  FilterComponent,
  ContactComponent,
  ContactButtonComponent,
  ContactFormComponent,
  AddSetComponent
} from './components';
import {
  LegoPage,
  SplashPage,
  ErrorPage,
} from './pages';
import {
  LegoSetPipe,
  SafePipe,
} from './pipes';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    LegoPage,
    SplashPage,
    AppComponent,
    ContentToggleComponent,
    NavigationComponent,
    FooterComponent,
    AuthComponent,
    AuthButtonComponent,
    ErrorComponent,
    FilterComponent,
    RadioComponent,
    DropdownComponent,
    SafePipe,
    LegoSetPipe,
    ContactComponent,
    ContactButtonComponent,
    ContactFormComponent,
    AddSetComponent,
    ErrorPage
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthComponent, ContactComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
