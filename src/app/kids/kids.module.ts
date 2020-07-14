import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsRoutingModule } from './kids-routing.module';
import { KidsPage } from './page/kids.page';
import { SharedModule } from '../shared/shared.module';
import { KidsCardComponent } from './components/kids-card/kids-card.component';

@NgModule({
  declarations: [
    KidsCardComponent,
    KidsPage,
  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class KidsModule { }
