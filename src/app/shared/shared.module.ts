import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDisplayComponent, InterstitialComponent, MediaGridComponent } from './components';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent, RadioComponent } from './components/filter';

@NgModule({
  declarations: [
    DropdownComponent,
    FilterComponent,
    InterstitialComponent,
    MediaGridComponent,
    RadioComponent,
    VideoDisplayComponent,
  ],
  exports: [
    DropdownComponent,
    FilterComponent,
    InterstitialComponent,
    RadioComponent,
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
