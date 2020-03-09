import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule, 
  ],
  declarations: [MapPage, GoogleMapsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports : [GoogleMapsComponent]
})
export class MapPageModule {}
