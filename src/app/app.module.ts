import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentToggleComponent, RecipeCardComponent } from './components';
import { RecipeToggleComponent } from './components/recipes/recipe-toggle/recipe-toggle.component';
import { RecipeInstructionsComponent } from './components/recipes/recipe-instructions/recipe-instructions.component';
import { RecipeIngredientsComponent } from './components/recipes/recipe-ingredients/recipe-ingredients.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    ContentToggleComponent,
    RecipeToggleComponent,
    RecipeInstructionsComponent,
    RecipeIngredientsComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
