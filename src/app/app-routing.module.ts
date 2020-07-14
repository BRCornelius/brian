import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SplashPage,
  RecipesPage,
  WorkoutsPage,
  LegoPage,
  ErrorPage
} from './pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SplashPage },
  { path: 'recipes', component: RecipesPage },
  { path: 'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)},
  { path: 'workouts', component: WorkoutsPage },
  { path: 'lego', component: LegoPage },
  { path: '**', component: ErrorPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
