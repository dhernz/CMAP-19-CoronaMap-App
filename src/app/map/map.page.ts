import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';
import { CommonService } from '../services/common.service';
declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;
  address = ""
  markerList = {}
  fetching = false;
  constructor(private geolocation: Geolocation,
    private menu: MenuController,
    private apiService: ApiService,
    private socket: Socket,
    private common: CommonService,
    public ga: GoogleAnalitycsService,
    private nativeGeocoder: NativeGeocoder) { }

    ngOnInit() {
      this.loadMap();
      this.socket.connect();
      this.socket.on("connect",(e)=>{
        console.log(e,this.socket)
      })
      this.socket.fromEvent('new-user').subscribe((data:any) => {
        if(localStorage.getItem("uid") != data.uid)
          this.common.presentToastDown(data.message)
      });
      this.ga.trackPagesHandler('Main Map','/map');
    }
   

    ionViewDidEnter(){
      this.menu.enable(true,"first")
    }

    loadMap() {
      this.geolocation.getCurrentPosition().then((resp) => {
        let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        }
   
        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
   
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
        this.map.addListener('center_changed', () => {
          if(!this.fetching){
            this.fetching = true
            this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
          }
        });
   
      }).catch((error) => {
        this.common.presentToast("No se pudo obtener su ubicación, por favor verifique si esta activo.")
        console.log('Error getting location', error);
      });
    }
   
    getAddressFromCoords(lattitude, longitude) {
      this.apiService.getReportsByLatLng(lattitude,longitude).then((reports:Array<any>)=>{
        console.log(reports)
        Object.keys(this.markerList).forEach(key=>{
          this.markerList[key].setMap(null)
        });
        this.markerList = []
        reports.forEach(report=>{
          if(!this.markerList[report.id]){
            const icon = {
              url: `assets/images/${this.apiService.statusObject[report.status_id].color}_oval.svg`,
              scaledSize: new google.maps.Size(10, 10),
            };
            this.markerList[report.id] = new google.maps.Marker({
              position: new google.maps.LatLng(report.latitude, report.longitude),
              map: this.map,
              title: report.id+"",
              icon: icon
            });
          }
        })
        this.fetching = false
      }).catch(err=>{
        console.log(err);
      })
    }

}
