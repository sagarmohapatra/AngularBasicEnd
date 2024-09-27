import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  userName: any = '';
  defaultCourse = 'Angular';
  myForm: any;
  // e: any;
  defaultGender = 'male';

  onSubmit(form: NgForm) {
    console.log(form);
  }
  genders: any = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];

  clickuserName() {
    this.myForm.setValue({
      userDetail:{
        username:"sagar",
        email:''
      },
      course:'',
      gender:''
    })
  }
}
