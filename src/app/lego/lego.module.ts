import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegoPage } from './page/lego.page';
import { AddSetComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { LegoSetPipe, SafePipe } from './pipes';
import { LegoRoutingModule } from './lego-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddSetComponent,
    LegoPage,
    LegoSetPipe,
    SafePipe
  ],
  imports: [
    CommonModule,
    LegoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LegoModule { }
