import { NgModule } from '@angular/core';

//Adds directives and providers for in-app navigation among views
//route configuration for the Router service
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
