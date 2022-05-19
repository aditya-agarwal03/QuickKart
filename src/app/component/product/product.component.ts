import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/products';
import { UserDataService } from 'src/app/Services/user-data.service';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  productId:string;
  //products:Products;
  prod:Products;

  constructor(private route: ActivatedRoute,private router:Router,private userDataService:UserDataService)
  {}

   
  
  ngOnInit(): void {
    this.prod=new Products();
    this.productId=this.route.snapshot.params['id'];
    this.userDataService.singleprod(this.productId).subscribe(data=>this.prod=data);   
  }


}
