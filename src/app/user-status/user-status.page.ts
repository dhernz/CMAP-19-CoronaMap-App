import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.page.html',
  styleUrls: ['./user-status.page.scss'],
})
export class UserStatusPage implements OnInit {

  statusAll = []

  constructor(
    private menu: MenuController,
    private geolocation: Geolocation,
    private router: Router,
    private common: CommonService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.common.presentLoading()
    this.apiService.getAllStatus().then((response:Array<any>)=>{
      this.statusAll = response
      this.common.hideLoading()
      console.log(this.statusAll);
    })
  }

  setStatus(statusCode, nextPage){
    this.common.presentLoading()
    let statusObj = this.statusAll.find(({ code }) => code === statusCode)
    this.geolocation.getCurrentPosition().then((resp) => {
      let reportData = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        status_id: statusObj.id
      }
      this.apiService.setReport(reportData).then(success=>{
        console.log(success)
        this.common.hideLoading()
        this.router.navigate([nextPage])
      }).catch(error=>{
        console.log('error setting report', error)
        this.common.hideLoading()
      })
    }).catch((error) => {
      console.log('Error getting location', error);
      this.common.hideLoading()
    });
    
  }

  ionViewDidEnter(){
    this.menu.enable(true,"first")
  }

}
