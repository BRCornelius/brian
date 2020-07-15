import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SplashPage,
  ErrorPage
} from './core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SplashPage },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  { path: 'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)},
  { path: 'workouts', loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule)},
  { path: 'lego', loadChildren: () => import('./lego/lego.module').then(m => m.LegoModule)},
  { path: '**', component: ErrorPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
