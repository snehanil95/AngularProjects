import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent {

  Myform= new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
     email:new FormControl("",[Validators.required,Validators.email]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),
        Validators.pattern("[0-9]*")]),
      password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)])

  })

  constructor( private _http:HttpClient, private _router:Router) 
  { }

  appointment()
  {
    this._http.post<any>('./data/user.json',this.Myform.value).subscribe(res=>{
      console.log(this.Myform.get("name"))
      alert('Appoinment Confirm');
      this.Myform.reset();
      this._router.navigate(['/special']);
    }), (err: any)=>{
      console.log(err);
      alert(' Error');
    }
  }

  get email():FormControl
  {
    return this.Myform.get("email") as FormControl;
  }
  get name():FormControl
  {
    return this.Myform.get("name") as FormControl;
  }
  get mobile():FormControl
  {
    return this.Myform.get("mobile") as FormControl;
  }
  get password():FormControl
  {
    return this.Myform.get("password") as FormControl;
  }

}
