import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Device } from '@ionic-native/device/ngx';  
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'https://server.coronamap19.org', options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule , IonicModule.forRoot(), AppRoutingModule,SocketIoModule.forRoot(config)],
  providers: [
    Geolocation,
    GoogleAnalytics,
    NativeGeocoder,
    Device,
    StatusBar,
    SplashScreen,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
