import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
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
    private menu: MenuController,
    private apiService: ApiService,
    private router: Router
  ) {
    this.initializeApp();
  }

  logout(){
    console.log("Logout")
    localStorage.removeItem("token");
    localStorage.removeItem("statusId");
    localStorage.removeItem("name");
    localStorage.removeItem("identity");
    this.menu.close("first")
    this.router.navigate(["/"])
  }

  getStatusColor(){
    let statusId = localStorage.getItem("statusId")
    if(this.apiService.statusAll.length > 0){
      return this.apiService.statusObject[statusId].color
    }else{
      return "blue"
    }
  }
  
  getStatusText(){
    let statusId = localStorage.getItem("statusId")
    if(this.apiService.statusAll.length > 0){
      return this.apiService.statusObject[statusId].name
    }else{
      return 'cargando'
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
