import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ContentToggleComponent,
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
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
