import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArafComponent } from './araf/araf.component';

const routes: Routes = [
  { path: '', component: ArafComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
