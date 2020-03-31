import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Socket } from 'ngx-socket-io';
import { CommonService } from '../services/common.service';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';
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
    private ga: GoogleAnalitycsService,
    private router: Router,
    private socket: Socket,
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

    this.socket.connect();
    this.socket.fromEvent('new-user').subscribe((data:any) => {
      if(localStorage.getItem("uid") != data.uid)
        this.common.presentToastDown(data.message)
    });
    this.ga.trackPagesHandler('User Status','/user-status');
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
        let address = localStorage.getItem("address")
        let uid = Date.now().toString()
        localStorage.setItem("uid",uid)
        this.socket.emit("new-user",{uid,message:`Un usuario en ${address} con estado ${statusObj.name} acaba de registrarse`})
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
    this.common.presentAlertConfirm("¿Estas seguro?","No podras cambiar tu estado en 24 horas","Si",()=>{
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
    },"No",()=>{});
  }

  ionViewDidEnter(){
    this.menu.enable(false,"first")
  }

}
