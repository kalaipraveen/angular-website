import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
