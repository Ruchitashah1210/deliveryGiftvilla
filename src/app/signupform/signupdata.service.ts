import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SignupdataService {
  private url: string = environment.url + "deliveyBoy_signup/";

  constructor(private _http:HttpClient) { }
  signup(obj: FormData)
  {
      console.log(obj);
   // const body=JSON.stringify(obj);
    //const head =new HttpHeaders().set(environment.header,environment.value);
    return this._http.post(this.url,obj);
  }
}
