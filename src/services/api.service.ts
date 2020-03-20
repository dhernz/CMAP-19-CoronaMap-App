import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = '127.0.0.1'
  constructor(private http: HTTP) { }

  register(userData){
    this.http.post(this.apiUrl,userData,{})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

}
