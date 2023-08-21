import { Component } from '@angular/core';
import {Service1Service} from './../service1.service'

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  mywhether:any;
  humidity:any
  pressure:any
  tempreture:any
  summary:any
  feelL:any;
  iconUrl: string="";
  city:string="Minneapolis";
  unit:string="matrix";
  urlCity:String=""

  
  
  constructor(private service:Service1Service){

    
  }
  
  
  ngOnInit():void
  {
    
  }
  onclick()
  {
    this.service.getwheather(this.city,this.unit).subscribe({
      next:(res)=> {
        this.mywhether=res;
        console.log(res)
        console.log(this.mywhether)

        this.humidity=this.mywhether.main.humidity;
        this.pressure=this.mywhether.main.pressure;
        this.tempreture=this.mywhether.main.temp;
        this.summary=this.mywhether.weather[0].main;
        this.feelL=this.mywhether.main.feels_like;
        this.iconUrl="https://openweathermap.org/img/wn/" +this.mywhether.weather[0].icon+"@2x.png";


      console.log(this.city)
    },
  })
  }

}
