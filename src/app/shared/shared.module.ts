import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDisplayComponent, InterstitialComponent, MediaGridComponent } from './components';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownComponent,
    InterstitialComponent,
    MediaGridComponent,
    VideoDisplayComponent,
  ],
  exports: [
    DropdownComponent,
    InterstitialComponent,
    MatSelectModule,
    VideoDisplayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
