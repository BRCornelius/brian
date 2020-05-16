import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPage, RecipesPage, KidsPage, WorkoutsPage } from './pages';

const routes: Routes = [
  { path: '', component: SplashPage },
  { path: 'recipes', component: RecipesPage },
  { path: 'kids', component: KidsPage },
  { path: 'workouts', component: WorkoutsPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
