import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Device } from '@ionic-native/device/ngx';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  userData: any = {}
  constructor(
    private apiService: ApiService,
    private device: Device
  ) { }

  ngOnInit() {
  }

  validateName(){
    return 'ion-invalid'
  }

  processForm(){
    console.log(this.device)
    let data = {
      ...this.userData,
      identity: this.userData.identityOne.toString() + this.userData.identityTwo.toString() + this.userData.identityThree.toString(),
      mac_address: "asd",
      country_code: "+504",
      device_id: this.device.uuid || "device_id_here"
    }
    this.apiService.register(data)
    console.log("Process form")
    console.log(data)
  }

  validForm(){
    let valid = false
    return valid
  }

}
