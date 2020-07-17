import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  NavigationComponent,
  SplashPage,
  ErrorPage,
} from './core';
import { SharedModule } from './shared/shared.module';
import { KidsModule } from './kids/kids.module';
import { LegoModule } from './lego/lego.module';
import { RecipesModule } from './recipes/recipes.module';
import { WorkoutsModule } from './workouts/workouts.module';

@NgModule({
  declarations: [
    SplashPage,
    AppComponent,
    NavigationComponent,
    ErrorPage
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
    ReactiveFormsModule,
    KidsModule, // LL-remove
    LegoModule, // LL-remove
    RecipesModule, // LL-remove
    SharedModule,
    WorkoutsModule // LL-remove
  ],
  providers: [
    KidsModule,
    LegoModule,
    RecipesModule,
    SharedModule,
    WorkoutsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
