import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  NavigationComponent,
  RecipeCardComponent,
  RecipeToggleComponent,
  RecipeIngredientsComponent,
  RecipeInstructionsComponent,
  RecipeListComponent,
  RecipeRequestComponent,
} from './components';
import { SplashPage, RecipesPage } from './pages';
import { FooterComponent } from './components/common/footer/footer.component';

@NgModule({
  declarations: [
    RecipesPage,
    SplashPage,
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
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
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
