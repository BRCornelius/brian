import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsRoutingModule } from './kids-routing.module';
import { KidsPage } from './page/kids.page';

@NgModule({
  declarations: [KidsPage],
  imports: [
    CommonModule,
    KidsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class KidsModule { }
