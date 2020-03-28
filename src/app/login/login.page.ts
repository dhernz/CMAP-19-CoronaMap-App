import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('identityOne',{static:false}) identityOne: ElementRef
  @ViewChild('identityTwo',{static:false}) identityTwo: ElementRef
  @ViewChild('identityThree',{static:false}) identityThree: ElementRef

  userData: any = {
    gender:'female',
    identityOne: '',
    identityTwo:'',
    identityThree:''
  }

  validIdentity = ''
  constructor(public apiService: ApiService,
              public common: CommonService,
              private ga: GoogleAnalitycsService,
              public router: Router) { }

  ngOnInit() {
    this.ga.trackPagesHandler('Login','/login');
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

  btnEnabled(){
    if(this.validIdentity == 'valid'){
      return 'enabled'
    }else{
      return 'disabled'
    }
  }

  processForm(){
    if(this.btnEnabled() == 'enabled'){
      let data = {
        identity: this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString(),
      }
      this.common.presentLoading()
      this.apiService.signin(data).then((data:any)=>{
        localStorage.setItem("token",data.token)
        localStorage.setItem("name",data.name);
        localStorage.setItem("identity",this.userData.identityOne.toString() + "-" + this.userData.identityTwo.toString()+ "-" + this.userData.identityThree.toString());
  
        this.apiService.getCurrentReport().then((success:any)=>{
          localStorage.setItem("statusId",success.status_id)
          localStorage.setItem("reportId", success.id)
          this.router.navigate(['/user-status'])
          this.common.hideLoading()
        }).catch(err=>{
          this.router.navigate(['/user-status'])
          this.common.hideLoading()
        });
      }).catch(err=>{
        console.log(err)
        if(err == "user_not_found") err = "Usuario no encontrado"
        this.common.presentToast(err)
        this.common.hideLoading()
      })
      console.log("Process form")
      console.log(data)

    }
  }


}
