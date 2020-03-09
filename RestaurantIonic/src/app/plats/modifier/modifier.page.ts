import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatsService } from 'src/app/service/plats.service';
import { Plat } from 'src/app/Models/plat';
import { NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/utils.service';
import { Restaurant } from '../../Models/restaurant';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  restaurants: Restaurant[];
  
  nomControl: FormControl;
  prixControl: FormControl;
  descriptionControl: FormControl;
  formGroup: FormGroup;
  platId: number;
  plat: Plat;
  restaurantControl: FormControl;

  constructor(
    private builder: FormBuilder, 
    private route: ActivatedRoute,
    private nav : NavController, 
    private service: PlatsService, 
    private router : Router,
    private utils: UtilsService) {
    this.platId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPlat(this.platId).subscribe(plat => {
      this.plat = plat;
      this.nomControl = new FormControl(this.plat.nom, [Validators.required, Validators.minLength(2)]);
      this.prixControl = new FormControl(this.plat.prix, Validators.required);
      this.descriptionControl = new FormControl(this.plat.description);
      this.restaurantControl = new FormControl(this.plat.restaurant, [Validators.required]);

      this.formGroup = this.builder.group({
        nom: this.nomControl,
        prix: this.prixControl,
        description: this.descriptionControl,
        restaurant : this.restaurantControl
      })
    })

  }

  modifier(): void {
    this.service.updatePlat(this.plat.id, this.formGroup.value).subscribe(plat=> {
      this.nav.back();
    })
  }

  ngOnInit() {
    this.getRestaurants();
  }

  /*modifierPlat(): void {
    let infoPlat = new Plat();
    infoPlat.id=this.platId;
    infoPlat.nom= this.formGroup.get('nom').value;
    infoPlat.prix= this.formGroup.get('prix').value;
    infoPlat.description= this.formGroup.get('description').value;
    infoPlat.restaurant = this.formGroup.get('restaurant').value;


    console.log(this.formGroup.value);

    this.service.updatePlat(infoPlat).subscribe(plat=>{
      this.utils.presentToast("Plat modifié avec succés","success");
      this.nav.back();
      console.log(plat);
    },error=>{
      this.utils.presentToast("Une erreur est survenue","danger");
   })
    
  }*/

  getRestaurants(): void {
    this.service.getRestaurants().subscribe(restaurant => {
      this.restaurants = restaurant;
    },
      error => {
        this.utils.presentToast('Erreur survenue', 'danger');
      });
  }


}
