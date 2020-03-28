import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { GoogleAnalitycsService } from './services/google-analitycs.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    private apiService: ApiService,
    private router: Router,
    public ga: GoogleAnalitycsService
  ) {
    this.initializeApp();
  }

  logout(){
    console.log("Logout")
    this.menu.enable(false,"first")
    localStorage.removeItem("token");
    localStorage.removeItem("statusId");
    localStorage.removeItem("name");
    localStorage.removeItem("identity");
    this.menu.close("first")
    this.router.navigate(["/"])
  }

  getStatusColor(){
    let statusId = localStorage.getItem("statusId")
    if(this.apiService.statusAll.length > 0 && statusId){
      return this.apiService.statusObject[statusId].color
    }else{
      return "blue"
    }
  }
  
  getStatusText(){
    let statusId = localStorage.getItem("statusId")
    if(this.apiService.statusAll.length > 0 && statusId){
      return this.apiService.statusObject[statusId].name
    }else{
      return 'cargando'
    }
  }

  getName(){
    return localStorage.getItem("name") || "cargando.."
  }

  getIdentity(){
    return localStorage.getItem("identity") || "cargando.."
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.ga.pageTrackMethod('home');
      this.ga.trackEventHandler("App Started",'app_flow');
      this.statusBar.styleLightContent()
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
