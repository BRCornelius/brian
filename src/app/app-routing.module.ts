import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashpageComponent } from './pages';

const routes: Routes = [
  { path: '', component: SplashpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
