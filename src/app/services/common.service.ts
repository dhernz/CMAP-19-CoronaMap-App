import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading:any
  toast: any
  constructor(public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Espere porfavor...',
      backdropDismiss:true
    });
    await this.loading.present();
  }

  async presentAlertConfirm(header,message,confirmText,confirmCallback,cancelText,cancelCallback) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: cancelText,
          role: 'cancel',
          cssClass: 'secondary',
          handler: cancelCallback
        }, {
          text: confirmText,
          handler: confirmCallback
        }
      ]
    });

    await alert.present();
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
