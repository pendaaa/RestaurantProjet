import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UtilsService } from 'src/app/utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Models/utilisateur';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  constructor(private service: AuthService, private utils: UtilsService, private formBuilder: FormBuilder, private route: Router) { }


  ngOnInit() {
    this.registerForm= this.formBuilder.group({
      'username' : [null,[Validators.required, Validators.minLength(3)]],
      'email' : [null,[Validators.required, Validators.email]],
      'password': [null, [Validators.required]]
    });
  }

  register(userInfo: Utilisateur){
    console.log(this.registerForm);
    this.service.register(userInfo).subscribe(data=>{
      this.utils.presentToast('Inscription réussie','success');
      this.route.navigateByUrl('login');
    },error=>{
      switch(error.error.message[0].message[0].id){
        case "Auth.form.error.email.taken":
          this.utils.presentToast('Email déja utilisé !','danger'); break;
        case "Auth.form.error.username.taken":
          this.utils.presentToast('User déja utilisé !','danger'); break;
        default: 
          console.log(error.error.message[0].message[0].id);
          this.utils.presentToast('Une erreur est survenue !','danger'); break;        
      }
    });
  }
  
}
