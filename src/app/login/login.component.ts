import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
[x: string]: any;
  loginForm!: FormGroup;
  allSingupData:any=[];
  
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router, private api:ApiService) { 
    
  }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }
   
  logIn() 
  {
    console.log(this.loginForm.value.email);
    this.api.UserConfirmation().subscribe(res => {
      this.allSingupData= res;
      console.log(res)
    
      for(let i=0 ; i< this.allSingupData.length; i++)
      {
    if(this.loginForm.value.email == this.allSingupData[i].email && this.loginForm.value.password ==this.allSingupData[i].password )
    {
          alert('login successfully');
          this._router.navigate(['/restaurent']);
          this.loginForm.reset(); 
    }
    
  }
  
 },err=>{
      console.log(err);
      alert("Login Failed!");}
    )  
  }

  
}
