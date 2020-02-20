import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public url: string = environment.url + "deliverdashboard/";
  constructor(private _http: HttpClient) { }
  getUserData() {
    return this._http.get(this.url);
  }
  getTrackById(track_id:number) {
    return this._http.get(this.url + track_id);
  }
  updateuser(track_id,item) {
    console.log(track_id);
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url +track_id, body, { headers: head1 });
  }
}
