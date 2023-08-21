import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mybatch } from './batch';

@Injectable({
  providedIn: 'root'
})
export class MyserveService  {
  [x: string]: any;
URL="http://127.0.0.1:5100/insert";
feild:any=[]
  constructor(private httpobj:HttpClient) { }

  
  
  }

