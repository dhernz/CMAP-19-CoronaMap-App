import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Device } from '@ionic-native/device/ngx';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MenuController } from '@ionic/angular';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';
declare var google;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  @ViewChild('identityOne',{static:false}) identityOne: ElementRef
  @ViewChild('identityTwo',{static:false}) identityTwo: ElementRef
  @ViewChild('identityThree',{static:false}) identityThree: ElementRef

  userData: any = {
    gender:'female',
    identityOne: '',
    identityTwo:'',
    identityThree:''
  }

  validName = ''
  validIdentity = ''
  validPhone = ''
  validDate = ''
  validAddress = ''
  latitude = 0.0
  longitude = 0.0
  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;

  constructor(
    public apiService: ApiService,
    private device: Device,
    private geolocation: Geolocation,
    private menu: MenuController,
    private common: CommonService,
    private router: Router,
    private zone: NgZone,
    private ga: GoogleAnalitycsService
  ) { 
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  ngOnInit() {
    this.getCurrentAddress().then(address=>{
      this.userData.address = address
      this.validAddress = 'valid'
    })
    this.ga.trackPagesHandler('Signup','/signup');
  }

  updateSearchResults(){
    if (this.apiService.addressSignup == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ radius:10000,input: this.apiService.addressSignup,location:new google.maps.LatLng(this.latitude, this.longitude) },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  selectSearchResult(item) {
    this.apiService.addressSignup = item.description
    this.autocompleteItems = []
  }

  getCurrentAddress(){
    return new Promise((resolve,reject)=>{
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude
        this.longitude = resp.coords.longitude
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

  ionViewDidEnter(){
    this.menu.enable(false,"first")
  }

  validateName(){
    if(this.userData.name.split(' ').length > 1)
      this.validName = 'valid'
    else
      this.validName = 'invalid'
  }

  validateIdentityOne(){
    let identity = this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString()
    if(identity.toString().length == 15){
      this.validIdentity = 'valid'
    } else if(this.identityOne) {
      this.validIdentity = 'invalid'
    }
    if(this.userData.identityOne.toString().length == 4)
      this.identityTwo.nativeElement.focus()
  }

  validateIdentityTwo(){
    let identity = this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString()
    if(identity.toString().length == 15){
      this.validIdentity = 'valid'
    } else {
      this.validIdentity = 'invalid'
    }
    if(this.userData.identityTwo.toString().length == 4)
      this.identityThree.nativeElement.focus()
  }

  validateIdentityThree(){
    let identity = this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString()
    if(identity.toString().length == 15){
      this.validIdentity = 'valid'
    } else {
      this.validIdentity = 'invalid'
    }
    if(this.userData.identityThree.toString().length == 5)
      this.identityThree.nativeElement.focus()
  }

  validatePhone(){
    if(this.userData.phone.length == 8){
      this.validPhone = 'valid'
    }else{
      this.validPhone = 'invalid'
    }
  }

  validateAddress(){
    this.updateSearchResults()
    if(this.apiService.addressSignup.length > 3){
      this.validAddress = 'valid'
    }else{
      this.validAddress = 'invalid'
    }
  }

  btnEnabled(){
    
    if(this.validPhone == 'valid' &&
    this.validIdentity == 'valid' &&
    this.validName == 'valid' &&
    this.validAddress == 'valid'){
      return 'enabled'
    }else{
      return 'disabled'
    }
  }

  processForm(){
    this.validateAddress()
    if(this.btnEnabled() == 'enabled'){
      console.log(this.device)
      let data = {
        ...this.userData,
        identity: this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString(),
        mac_address: "asd",
        country_code: "+504",
        device_id: this.device.uuid || Date.now()
      }
      data.address = this.apiService.addressSignup
      this.common.presentLoading()
      this.apiService.register(data).then((data:any)=>{
        localStorage.setItem("token",data.token)
        localStorage.setItem("name",this.userData.name);
        localStorage.setItem("identity",this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString());
        localStorage.setItem("address",this.apiService.addressSignup)
        this.apiService.getCurrentReport().then((success:any)=>{
          localStorage.setItem("statusId",success.status_id)
          localStorage.setItem("reportId", success.id)
          this.common.hideLoading()
          this.router.navigate(['/user-status'])
        }).catch(err=>{
          this.common.hideLoading()
          this.router.navigate(['/user-status'])
        });
      }).catch(err=>{
        console.log(err)
        this.common.presentToast(err)
        this.common.hideLoading()
      })
      console.log("Process form")
      console.log(data)

    }
  }

  validForm(){
    let valid = false
    return valid
  }

}
