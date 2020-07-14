import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsRoutingModule } from './workouts.routing.module';
import { WorkoutsPage } from './page/workouts.page';
import { SharedModule } from '../shared/shared.module';
import { WorkoutCardComponent } from './components';
import { OtfUrlPipe } from './pipes/otf-url.pipe';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    WorkoutCardComponent,
    WorkoutsPage,
    OtfUrlPipe
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    SharedModule,
    WorkoutsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WorkoutsModule { }
