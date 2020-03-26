import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// root@ip-172-31-12-209:/etc/letsencrypt/live/server.coronamap19.org# ls
// README  cert.pem  chain.pem  fullchain.pem  privkey.pem


export class ApiService {
  apiUrl = 'https://server.coronamap19.org'
  statusAll = []
  statusObject = {}
  symptoms = []
  addressSignup = ""
  constructor(private http: HttpClient) {
    this.getAllStatus();
    this.getAllSymptoms();
  }

  jsonToParams(json): HttpParams{
    let httpParams = new HttpParams()
    Object.keys(json).forEach(key=>{
      httpParams = httpParams.set(key,json[key])
    });
    return httpParams
  }

  register(userData){
    return new Promise((resolve,reject)=>{
      console.log(this.jsonToParams(userData))
      this.http.post(this.apiUrl+'/user',this.jsonToParams(userData)).subscribe((response:any) => {
          console.log(response);
          if(response.error){
            reject(response.error)
          }else{
            resolve(response)
          }
      });
    })
  }

  setReport(reportData){
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiUrl+'/report',this.jsonToParams(reportData),{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {
          if(response.error){
            reject(response.error)
          }else{
            resolve(response)
          }
      });
    })
  }

  updateReport(reportData){
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiUrl+'/updateReport',this.jsonToParams(reportData),{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {  
        console.log(response)
        if(response.error){
          reject(response.error)
        }else{
          resolve(response)
        }
      });
    })
  }

  addSymptoms(symptomId){
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiUrl+'/user/symptom',this.jsonToParams({symptom_id:symptomId}),{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {
        console.log("ADDSYMPROM RESPONSE ",response)  
        if(response.error){
          reject(response.error)
        }else{
          resolve(response)
        }
      });
    })
  }

  getAllStatus(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiUrl+'/status',{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {
          if(response.error){
            reject(response.error)
          }else{
            this.statusAll = response
            this.statusAll.forEach(status=>{
              this.statusObject[status.id] = status
            })
            console.log(response)
            resolve(response)
          }
      });
    })
  }

  getAllSymptoms(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiUrl+'/symptoms',{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {
          if(response.error){
            reject(response.error)
          }else{
            this.symptoms = response
            resolve(response)
          }
      });
    })
  }

  getCurrentReport(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiUrl+'/report',{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {
          if(response.error){
            reject(response.error)
          }else{
            resolve(response)
          }
      });
    })
  }

  getReportsByLatLng(latitude,longitude){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiUrl+'/report/'+latitude+"/"+longitude,{ headers: {authorization: localStorage.getItem("token")} }).subscribe((response:any) => {
        if(response.error){
          reject(response.error)
        }else{
          resolve(response)
        }
      });
    });
  }

}
