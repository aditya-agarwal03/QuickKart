import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from './Services/user-data.service';
import{ Router } from '@angular/router';
import {ProductComponent} from 'src/app/component/product/product.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent 
{
  constructor(private router:Router)
  {

  }

  
}


