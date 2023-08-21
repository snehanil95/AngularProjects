import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{
  signupForm= new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
     email:new FormControl("",[Validators.required,Validators.email]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),
        Validators.pattern("[0-9]*")]),
      password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)])

  })
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) 
  { }

  ngOnInit(): void 
  {
    // this.signupForm = this.formbuilder.group({
    //   name:[''],
    //   email:[''],
    //   mobile:[''],
    //   password: ['']
    // })
  }

  signUp()
  {
    this._http.post<any>('http://localhost:3000/signup',this.signupForm.value).subscribe(res=>{
      console.log(this.signupForm.get("name"))
      alert('Signup Successfully');
      this.signupForm.reset();
      this._router.navigate(['/login']);
    }), (err: any)=>{
      console.log(err);
      alert('Signup Error');
    }
  }

  get email():FormControl
  {
    return this.signupForm.get("email") as FormControl;
  }
  get name():FormControl
  {
    return this.signupForm.get("name") as FormControl;
  }
  get mobile():FormControl
  {
    return this.signupForm.get("mobile") as FormControl;
  }
  get password():FormControl
  {
    return this.signupForm.get("password") as FormControl;
  }

}
