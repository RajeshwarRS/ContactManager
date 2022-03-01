import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FlexboxComponent } from '../flexbox/flexbox.component';
/*
const routes: Routes = [
  {path: 'buttons',component: ButtonComponent},
  {path:'**', redirectTo:'buttons'}
];
*/
const routes: Routes = [
  {path: 'buttons',component: FlexboxComponent},
  {path:'**', redirectTo:'buttons'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
