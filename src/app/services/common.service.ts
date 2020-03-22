import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading:any
  toast: any
  constructor(public loadingController: LoadingController,
    public toastController: ToastController) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Espere porfavor...',
    });
    await this.loading.present();
  }

  async hideLoading(){
      this.loading.dismiss()
  }

  async presentToast(message) {
    if(this.toast) this.toast.dismiss()
    this.toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "danger",
      position: "middle"
    });
    this.toast.present();
  }

}
