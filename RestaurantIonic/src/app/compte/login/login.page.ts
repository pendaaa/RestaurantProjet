import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UtilsService } from 'src/app/utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

  @Injectable({
    providedIn: 'root'
  })
  
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  username : string;
  email : string;
  constructor(private service: AuthService, private utils: UtilsService, private formBuilder: FormBuilder, private toastController: ToastController, private route: Router) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      'identifier' : [null,[Validators.required, Validators.email]],
      'password': [null, [Validators.required]]
    });
  }

  login(userInfo: any){
    console.log(this.service.redirectUrl);
    this.service.login(userInfo).subscribe(data=>{
      this.service.isAuth = true;
      window.localStorage.setItem('token',data.jwt);
      this.username = userInfo.identifier ;
      window.localStorage.setItem('username', this.username);
      this.route.navigateByUrl(this.service.redirectUrl);
    },error=>{
      this.utils.presentToast("Nom d'utilisateur ou mot de passe incorect",'danger');
    });
  }


}
