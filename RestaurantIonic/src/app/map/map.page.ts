import { Component,ViewChild, OnInit } from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

 @ViewChild(GoogleMapsComponent) mapComponent: GoogleMapsComponent;

  constructor() { }

  ngOnInit() {
  }

}
