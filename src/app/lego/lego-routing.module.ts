import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegoPage } from './page/lego.page';

const routes: Routes = [
  { path: '', component: LegoPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegoRoutingModule { }
