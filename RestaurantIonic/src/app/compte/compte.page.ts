import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})

export class ComptePage {

  constructor() {}
  
  username = window.localStorage.getItem('username');
  email = window.localStorage.getItem('email');
  token = window.localStorage.getItem('token');
  

  public  deconnexion():void {
    console.log(this.username);
    window.localStorage.removeItem('token');
    location.reload();
    
  }
}
