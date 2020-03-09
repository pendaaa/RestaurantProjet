import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatsService } from 'src/app/service/plats.service';
import { ToastController, AlertController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { Plat } from '../Models/plat';

@Component({
  selector: 'app-tab1',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

  plats: Plat[];
  platsToday: Plat[];

  constructor(private route: Router, private service: PlatsService, private toast: ToastController, private utils: UtilsService, private alertController: AlertController) {
    this.getPlats();
  }
  getPlats(): void {
    this.service.getPlats().subscribe(plats => {
      this.plats = plats;
    },
      error => {
        this.utils.presentToast('Erreur survenue', 'danger');

      });
  }
   choisirPlat() {
    let options = [];
    this.plats.forEach(element => {
      options.push(
        {
          name: element.nom,
          type: 'checkbox',
          label: element.nom,
          value: element.nom + ': \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+element.prix,
        }
      )
    });
      const alert =  this.alertController.create({
      header: 'Les Plats',
      inputs: options,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
         {
          text: 'Valider',
          handler: data => {
            this.platsToday = data;
          }
        }
      ]
    }).then(alert=> alert.present()); 
  }
}
