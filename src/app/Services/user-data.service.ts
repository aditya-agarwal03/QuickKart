import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>
  {
    return this.http.get('https://localhost:44386/api/Product/GetProducts');
  }

  singleprod(id:string):Observable<any>
  {
    return this.http.get('https://localhost:44386/api/Product/GetProduct?productId='+id);
  }

  validateUser(email:string,password:string):Promise<any>
  {
    return this.http.post<any>('https://localhost:44386/api/Home/ValidateLogin',{email,password}).toPromise();
  }


}

// :Observable<any>
