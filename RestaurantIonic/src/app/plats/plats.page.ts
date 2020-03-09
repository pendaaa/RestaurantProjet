import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../Models/plat';
import {PlatsService} from 'src/app/service/plats.service';
import { ToastController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { Restaurant } from '../Models/restaurant';

@Component({
  selector: 'app-tab2',
  templateUrl: 'plats.page.html',
  styleUrls: ['plats.page.scss']
})
export class Tab2Page {
 
  ionViewDidEnter(){
    this.getPlats();

  }

  plats : Plat [];
  constructor(private route : Router, private service: PlatsService, private toast : ToastController, private utils: UtilsService) {
    this.getPlats();
  }

  /*modifierPlat (id:any):void
  {
    this.route.navigate(['tabs/plats/modifier',id]);
  }

  getPlats() : void
  {
    this.api.getPlats().subscribe(Response=>{
      this.plats = Response;
    });
  }
  delete(plat:Plat):void
  {
    this.api.deletePlat(plat.id).subscribe(plat =>{
      this.getPlats();
    });
  }*/

  getPlats():void 
  {
    this.service.getPlats().subscribe(plats =>{
        this.plats = plats;
    }, 
    error=>
    { 
      this.utils.presentToast('Erreur survenue','danger');

    });
  }
  modifierPlat (id:any):void
  {
    this.route.navigate(['tabs/plats/modifier',id]);
  }
  deletePlat(id: number):void
  {
      this.service.deletePlat(id).subscribe(plat=>{
      this.utils.presentToast('Supprimé avec succès','success');
      this.getPlats();
    });
  }
}
