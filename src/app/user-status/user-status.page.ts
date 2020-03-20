import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.page.html',
  styleUrls: ['./user-status.page.scss'],
})
export class UserStatusPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.menu.enable(true,"first")
  }

}
