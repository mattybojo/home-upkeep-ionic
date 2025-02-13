import { inject, Injectable } from '@angular/core';
import { IonButton, ToastController, ToastOptions } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private DEFAULT_TOAST_OPTIONS: ToastOptions = {
    duration: 3000,
    swipeGesture: 'vertical'
  };

  // DI
  private toastController = inject(ToastController);

  constructor() { }

  async showErrorToast(): Promise<void> {
    await this.showToast({ color: 'danger' });
  }

  async showToast(options: ToastOptions): Promise<void> {
    const toast = await this.toastController.create({ ...this.DEFAULT_TOAST_OPTIONS, ...options });
    await toast.present();
  }
}
