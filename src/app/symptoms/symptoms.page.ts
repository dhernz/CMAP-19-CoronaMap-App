import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss'],
})
export class SymptomsPage implements OnInit {

  constructor(
    private menu: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menu.enable(false,"first")
  }
   
  

}
