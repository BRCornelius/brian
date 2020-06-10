import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  MediaCardComponent,
  MediaGridComponent,
  NavigationComponent,
  RadioComponent,
  RecipeCardComponent,
  RecipeRequestComponent,
  RecipeToggleComponent,
  RecipeIngredientsComponent,
  RecipeInstructionsComponent,
  RecipeListComponent,
  DropdownComponent,
  FilterComponent,
  WorkoutCardComponent,
  VideoDisplayComponent,
} from './components';
import {
  KidsPage,
  LegoPage,
  SplashPage,
  RecipesPage,
  WorkoutsPage
} from './pages';
import { LegoSetPipe, SafePipe, OtfUrlPipe, OtfVideoPipe } from './pipes';
import { KidsVideoPipe } from './pipes/kids-video.pipe';


@NgModule({
  declarations: [
    KidsPage,
    LegoPage,
    RecipesPage,
    SplashPage,
    WorkoutsPage,
    AppComponent,
    ContentToggleComponent,
    NavigationComponent,
    RecipeCardComponent,
    RecipeIngredientsComponent,
    RecipeInstructionsComponent,
    RecipeListComponent,
    RecipeToggleComponent,
    FooterComponent,
    RecipeRequestComponent,
    MediaGridComponent,
    VideoDisplayComponent,
    MediaCardComponent,
    WorkoutCardComponent,
    AuthComponent,
    AuthButtonComponent,
    ErrorComponent,
    FilterComponent,
    RadioComponent,
    DropdownComponent,
    SafePipe,
    LegoSetPipe,
    OtfVideoPipe,
    OtfUrlPipe,
    KidsVideoPipe,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
