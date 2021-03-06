import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsRoutingModule } from './kids-routing.module';
import { KidsPage } from './page/kids.page';
import { SharedModule } from '../shared/shared.module';
import { KidsCardComponent } from './components/kids-card/kids-card.component';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    KidsCardComponent,
    KidsPage,
  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    MatGridListModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class KidsModule { }
