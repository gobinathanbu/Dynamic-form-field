import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFieldComponent } from './components/form-field/form-field.component';


const routes: Routes = [
  {path:'', component: FormFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
