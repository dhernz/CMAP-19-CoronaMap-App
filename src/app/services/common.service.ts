import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading:any
  constructor(public loadingController: LoadingController) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000,
    });
    await this.loading.present();
  }

  async hideLoading(){
    this.loading.dismiss()
  }

}
