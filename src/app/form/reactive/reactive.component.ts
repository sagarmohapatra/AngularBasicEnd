import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent {
  notAllowedNames = ['sagar', 'sipu'];
  myReactiveFrom: any = FormGroup; // FormGroup default value
  genders: any = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];
  userDetail: any;
  ngOnInit() {
    this.myReactiveFrom = new FormGroup({
      userDetail: new FormGroup({                
        username: new FormControl(null, [Validators.required,this.NanName.bind(this)]), //FormControl default value
        email: new FormControl(null, [Validators.required, Validators.email],this.NaEmails),
      }),

      course: new FormControl('Javascript'),
      gender: new FormControl('male'),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }
  onSubmit() {
    console.log(this.myReactiveFrom);
  }

  onAddSkills() {
    this.myReactiveFrom
      .get('skills')
      .push(new FormControl(null, Validators.required));
  }
  NanName(control: AbstractControl ) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'nameIsNotAllow': true };
    }else{
      return null
    }
  }

  NaEmails(control:AbstractControl):Promise<any>|Observable<any>{
    const myResponse=new Promise((reslove,reject)=>{
      setTimeout(()=>{
        if(control.value==='sagar@gmail.com'){
          reslove({'emailNotAllow':null})
        }
      },1500)
    })
    return myResponse
  }
}
