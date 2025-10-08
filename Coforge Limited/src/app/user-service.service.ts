import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'https://reqres.in/api/users';
  private url1='https://jsonplaceholder.org/users';
  httpClient: any;

  constructor(private http: HttpClient) { }

  helloService(){
    return "Hello from Angular Service";
  }

  getUsers(): Observable<any>{
    return this.http.get(this.url1);
  }
}
