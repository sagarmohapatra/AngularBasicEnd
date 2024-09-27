import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'template',
    pathMatch:'full'
  },
  {
        path:"template",
        component:TemplateFormComponent
      },]


@NgModule({
  declarations: [
    TemplateFormComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class FormModule { }
