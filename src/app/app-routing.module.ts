import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/component/product/product.component';
import { BodyComponent } from 'src/app/component/body/body.component';
import { HomeComponent } from 'src/app/component/home/home.component';



const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'ProductList',component: BodyComponent},
  {path:'Product/:id/ProductList',component: BodyComponent},
  {path:'Product/:id',component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
