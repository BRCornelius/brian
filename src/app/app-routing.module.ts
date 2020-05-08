import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPage, RecipesPage, KidsPage } from './pages';

const routes: Routes = [
  { path: '', component: SplashPage },
  { path: 'recipes', component: RecipesPage },
  { path: 'kids', component: KidsPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
