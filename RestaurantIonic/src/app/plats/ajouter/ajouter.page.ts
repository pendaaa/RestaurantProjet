import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/Models/plat';
import { PlatsService } from 'src/app/service/plats.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/utils.service';
import { Restaurant } from '../../Models/restaurant';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  restaurants : Restaurant[];
  plat: Plat;
  constructor(private service: PlatsService, private toast: ToastController, private route: Router, private utils: UtilsService) {
    this.plat = new Plat();
    this.getRestaurants();
  }

  ngOnInit() {
  }

  /*async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }*/

  ajouterPlat(): void {
    this.service.postPlat(this.plat).subscribe(plat => {
      this.utils.presentToast("Plat ajouté avec succès.","success");
      this.route.navigate(['/tabs/plats']);
    }, error => {
      this.utils.presentToast("Une erreur est survenue","danger");
    })
  }

  getRestaurants(): void {
    this.service.getRestaurants().subscribe(restaurant => {
      this.restaurants = restaurant;
    },
      error => {
        this.utils.presentToast('Erreur survenue', 'danger');
      });
    }

}
