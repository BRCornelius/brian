import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesPage } from './page/recipes.page';
import { RecipeCardComponent, RecipeIngredientsComponent, RecipeInstructionsComponent, RecipeListComponent, RecipeRequestComponent, RecipeToggleComponent, ToTryComponent } from './components';
import { ListOrderPipe } from './pipes/list-order.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListOrderPipe,
    RecipeCardComponent,
    RecipeIngredientsComponent,
    RecipeInstructionsComponent,
    RecipeListComponent,
    RecipeRequestComponent,
    RecipeToggleComponent,
    RecipesPage,
    ToTryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RecipesModule { }
