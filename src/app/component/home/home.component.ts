import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  role:string;

  constructor(private userData:UserDataService,private router:Router) {
    
   }

  ngOnInit(): void {
  }

  async validate(email1:string,password1:string)
  {
    
    this.role=await this.userData.validateUser(email1,password1);
    
    if(this.role=="Customer")
    {
      console.log("You are a Customer");
    }
    else if(this.role=="Admin")
    {
      console.log("You are a Admin");
      this.router.navigate(['ProductList'])
    }
    else
    {
      console.log("Invalid Credentials");
    }
    
  }

}
