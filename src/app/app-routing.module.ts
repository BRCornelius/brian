import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SplashPage,
  RecipesPage,
  KidsPage,
  WorkoutsPage,
  LegoPage,
  ErrorPage
} from './pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SplashPage },
  { path: 'recipes', component: RecipesPage },
  { path: 'kids', component: KidsPage },
  { path: 'workouts', component: WorkoutsPage },
  { path: 'lego', component: LegoPage },
  { path: '**', component: ErrorPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
