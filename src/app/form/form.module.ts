import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'reactive',
    pathMatch:'full'
  },
  // {
  //       path:"template",
  //       component:TemplateFormComponent
  //     },
    
      {
        path:"reactive",
        component:ReactiveComponent
      },
    ]


@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
