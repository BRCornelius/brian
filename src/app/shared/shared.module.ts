import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDisplayComponent, InterstitialComponent, MediaGridComponent } from './components';

@NgModule({
  declarations: [
    InterstitialComponent,
    MediaGridComponent,
    VideoDisplayComponent,
  ],
  exports: [
    InterstitialComponent,
    MediaGridComponent,
    VideoDisplayComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
