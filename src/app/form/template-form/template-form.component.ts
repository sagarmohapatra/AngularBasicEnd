import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  @ViewChild("myForm")myForm:any=NgForm 
  submitted:any=false
  userName: any = '';
  defaultCourse = 'Angular';
  // myForm: any;
  // e: any;
  defaultGender = 'male';
  // form: any;
  voolenval:any=false
ngOnInit(){
  console.log(this.submitted);
  
}
  onSubmit(form: NgForm) {
    // console.log(this.myForm);
    console.log(form.value);
    
    this.submitted=true
    this.formData.username=form.value.userDetail.username;
    this.formData.email=form.value.userDetail.email;
    this.formData.course=form.value.course
    this.formData.gender=form.value.gender

    this.myForm.reset()
  }
  genders: any = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];

  formData={
    username:"",
    email:"",
    course:"",
    gender:""
   
  }

  clickuserName() {
    this.voolenval=true
    //   this.myForm.setValue({
    //     userDetail:{
    //       username:"rihit",
    //       email:''
    //     },
    //     course:'angular',
    //     gender:'male'
    //   })
    this.myForm.form.patchValue({
      userDetail: {
        username: 'sagar',
        // email: '',
      },
    });
  }
}
