import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/Services/user-data.service';
import { AppComponent } from 'src/app/app.component';
import{ Router } from '@angular/router';
import {ProductComponent} from 'src/app/component/product/product.component';
import { Observable } from 'rxjs';
import { Products } from 'src/app/products';




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
 
  //products:Observable<Products[]>;
  products:any;

  paginate:any;

  title = 'QuickKart';
 
 // totalrecords:number=60;
  page:number=1;

  constructor(private userData:UserDataService, private router:Router)
  { 
  }
  
  ngOnInit(): void {
    //this.reloadData();
    this.userData.getProducts().subscribe((data)=>{this.products=data})
  }
  
  // reloadData(){
  //   this.products=this.userData.getProducts();
   
  // }


 /*goToPage(pageName:string):void
  {
    this.router.navigate([`${pageName}`]);
  }*/

  getProductDetails(id:string)
  {
    this.router.navigate(['Product',id])
  }

}
