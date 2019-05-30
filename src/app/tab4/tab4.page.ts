import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {


  




constructor(private toastCtrl: ToastController, private toastCtrl2: ToastController) {

}


async presentToastWithOptions() {
  const toast = await this.toastCtrl.create({
    header: 'Details',
    message: 'Location: Lisbon\nPrice: 450USD\nNumber of Guests: 7-9\nUtilities: Dishwasher',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'information-circle',
        text: 'Nata',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }   
            ] 
      }
  );
  toast.present();
    }

    async presentToastWithOptions2() {
      const toast = await this.toastCtrl2.create({
        header: 'Details',
        message: 'Location: Paris\nPrice: 500USD\nNumber of Guests: 12-15\nUtilities: Hot tub',
        position: 'top',
        buttons: [
          {
            side: 'start',
            icon: 'information-circle',
            text: 'De Fleurs',
            handler: () => {
              console.log('Favorite clicked');
            }
          }, {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }   
                ] 
          }
      );
      toast.present();
        }
  
    }