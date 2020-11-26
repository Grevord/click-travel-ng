import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BilletListComponent} from "./billet/billet-list/billet-list.component"

const routes: Routes = [
  {path: "billets/:name", component:BilletListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
