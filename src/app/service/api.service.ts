import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:string='https://dummyjson.com/users';

  constructor(private http:HttpClient) { }
  getallcontacts():Observable<any>{
   return this.http.get(this.baseurl)
  }
}
