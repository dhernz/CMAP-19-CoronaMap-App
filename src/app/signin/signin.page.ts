import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  userData = {}
  constructor() { }

  ngOnInit() {
  }

  validateName(){
    return 'ion-invalid'
  }

  processForm(){
    
    console.log("Process form")
  }

  validForm(){
    let valid = false
    return valid
  }

}
