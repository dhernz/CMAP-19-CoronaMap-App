import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://127.0.0.1:3000'
  constructor(private http: HttpClient) { }

  register(userData){
    this.http.post(this.apiUrl+'/user',userData).subscribe((response) => {
        console.log(response);
    });
  }

}
