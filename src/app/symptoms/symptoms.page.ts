import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';
declare var google;
@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss'],
})


export class SymptomsPage implements OnInit {
    
  sick_days = 0
  address = ""
  noneSymptomsChecked = false;
  who_been = ""
  who_been_list = [{
      name: "Familia",
      value: "family",
      isChecked: false
    },
    {
      name: "Amigos",
      value: "friends",
      isChecked: false
    },
    {
      name: "Compañeros de trabajo",
      value: "work",
      isChecked: false
    },
    {
      name: "Vecinos",
      value: "neighbors",
      isChecked: false
    }
  ]
  constructor(
    private menu: MenuController,
    private geolocation: Geolocation,
    private common: CommonService,
    private router: Router,
    private ga: GoogleAnalitycsService,
    public apiService: ApiService) {
      this.apiService.getAllSymptoms()
      this.apiService.getAllConditions()
    }

  ngOnInit() {
    this.ga.trackPagesHandler('Symptoms','/symptoms');
  }

  useCurrentLocation(){
    console.log("getting current")
    this.common.presentLoading()
    this.getCurrentAddress().then((address:string)=>{
      this.address = address;
      this.common.hideLoading()
    }).catch(err=>{
      console.log(err);
      this.common.hideLoading()
    })
  }

  getCurrentAddress(){
    return new Promise((resolve,reject)=>{
      this.geolocation.getCurrentPosition().then((resp) => {
        let geocoder = new google.maps.Geocoder;
        var latlng = {lat: resp.coords.latitude, lng: resp.coords.longitude};
        geocoder.geocode({'location': latlng}, function(results, status) {
          console.log(results)
          if (status === 'OK') {
            if (results[0]) {
              resolve(results[0].formatted_address);
            } else {
              reject('No results found');
            }
          }else{
            reject(status)
          }
        });
      });
    })
  }
  setNoneSymptoms(val){
    if(val)
      this.noneSymptomsChecked = !val
  }
  changeNoneSymptoms(){
    if(this.noneSymptomsChecked){
      this.apiService.symptoms.forEach(symptom=>{
        symptom.isChecked = false
      })
    }
  }

  noneSymptoms(){
    this.apiService.symptoms.forEach(symptom=>{
      symptom.isChecked = false
    })
    this.noneSymptomsChecked = true
  }

  save(){
    this.who_been = ""
    let symptomsChecked = 0
    this.apiService.symptoms.forEach(symptom=>{
      if(symptom.isChecked){
        this.apiService.addSymptoms(symptom.id)
        symptomsChecked++
      }
    })
    if(symptomsChecked == 0 && !this.noneSymptomsChecked){
      this.common.presentToast("Seleccione al menos un sintoma")
      return false
    }
    if(this.address == ""){
      this.common.presentToast("Por favor ingrese una direccion")
      return false
    }
    this.who_been_list.forEach(w=>{
      if(w.isChecked) {
        if(this.who_been != "") this.who_been += ","
        this.who_been += w.value
      }
    })
    let fineStatusObj = this.apiService.statusAll.find(({ code }) => code === "fine")
    let symptomsStatusObj = this.apiService.statusAll.find(({ code }) => code === "symptoms")
    let updateReport = {
      status_id: this.noneSymptomsChecked ? fineStatusObj.id : symptomsStatusObj.id,
      sick_days: this.sick_days,
      address: this.address,
      who_been: this.who_been,
      reportId:localStorage.getItem("reportId")
    }
    
    
    this.apiService.updateReport(updateReport).then(success=>{
      console.log(success)
      localStorage.setItem("statusId",updateReport.status_id)
      this.router.navigateByUrl("/map")
    }).catch(err=>{
      console.log("updatereporterror ==> ",err)
    })
  }

  ionViewDidEnter(){
    this.menu.enable(false,"first")
  }
   
  

}
