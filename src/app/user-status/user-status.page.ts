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
    if(this.apiService.statusAll.length == 0){
      this.common.presentLoading()
      this.apiService.getAllStatus().then((response:Array<any>)=>{
        this.statusAll = response
        this.common.hideLoading()
        console.log(this.statusAll);
      })
    }else{
      this.statusAll = this.apiService.statusAll
    }
  }


  updateStatus(statusCode,nextPage){
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
        localStorage.setItem("statusId",statusObj.id)
        this.common.hideLoading()
        this.router.navigate([nextPage])
      }).catch(error=>{
        console.log('error setting report', error)
        this.common.presentToast(error)
        this.common.hideLoading()
      })
    }).catch((error) => {
      console.log('Error getting location', error);
      this.common.hideLoading()
    });
    
  }

  setStatus(statusCode, nextPage){
    switch (statusCode) {
      case "infected":
        this.common.presentAlertConfirm("Estoy infectado","¿Ya te hicieron la prueba?","Si",()=>{
          let statusObj = this.statusAll.find(({ code }) => code === "symptoms")
          if(localStorage.getItem("statusId") == statusObj.id ){
            this.updateStatus(statusCode,nextPage)
          }else{
            this.updateStatus(statusCode,"/symptoms")
          }
        },"No",()=>{
          this.updateStatus("symptoms","/symptoms")
        })
        break;
      case "recovered":
        this.common.presentToast("Solo el administrador asignar este estado.")
        break;
      default:
        this.updateStatus(statusCode,nextPage)
        break;
    }
  }

  ionViewDidEnter(){
    this.menu.enable(false,"first")
  }

}
