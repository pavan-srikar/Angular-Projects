import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyusersService {
  private url = 'https://reqres.in/api/users';
  private url1='https://jsonplaceholder.org/users';
  private url2='https://randomuser.me/api/?results=10'
  private apiKey = 'reqres-free-v1';

  //DI of HTTP Client using Constructors
  constructor(private httpClient: HttpClient) { }

  helloService() {
        return "Hello from Angular Service";
      }
      
      
       // ✅ API call to jsonplaceholder.org (no API key needed)
  getPlaceholderUsers() {
    return this.httpClient.get(this.url1);
  }
}
