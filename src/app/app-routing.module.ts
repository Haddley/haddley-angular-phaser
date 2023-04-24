import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BounceComponent } from './bounce/bounce.component';

const routes: Routes = [
  { path: 'bounce', component: BounceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
