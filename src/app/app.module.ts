import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
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
  RecipeCardComponent,
  RecipeRequestComponent,
  RecipeToggleComponent,
  RecipeIngredientsComponent,
  RecipeInstructionsComponent,
  RecipeListComponent,
  SortComponent,
  WorkoutCardComponent,
  VideoDisplayComponent,
} from './components';
import {
  KidsPage,
  SplashPage,
  RecipesPage,
  WorkoutsPage
} from './pages';

@NgModule({
  declarations: [
    KidsPage,
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
    SortComponent
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
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthComponent]
})
export class AppModule { }
