import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ApiService } from '../services/api.service';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';
import { CommonService } from '../services/common.service';
declare var google;
@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.page.html',
  styleUrls: ['./pin-map.page.scss'],
})
export class PinMapPage implements OnInit {
  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;
  fetching = false;
  address = ""
  constructor(private geolocation: Geolocation,
    private common: CommonService,
    private ga: GoogleAnalitycsService,
    public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.addressSignup = "Cargando dirección..."
    this.loadMap()
    this.ga.trackPagesHandler('Pin Map Signup','/pin-map');
  }

  loadMap() {
    console.log("LOADING MAP")
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
 
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude).then((address:string)=>{
        this.fetching = false
        this.apiService.addressSignup = address
      });
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.map.addListener('center_changed', () => {
        if(!this.fetching){
          this.fetching = true
          this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng()).then((address:string)=>{
            this.fetching = false
            this.apiService.addressSignup = address
          })
        }
      });
 
    }).catch((error) => {
      this.common.presentToast("No se pudo obtener su ubicación, por favor verifique si esta activo.")
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(latitude, longitude) {
    return new Promise((resolve,reject)=>{
      this.geolocation.getCurrentPosition().then((resp) => {
        let geocoder = new google.maps.Geocoder;
        var latlng = {lat: latitude, lng: longitude};
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

}
