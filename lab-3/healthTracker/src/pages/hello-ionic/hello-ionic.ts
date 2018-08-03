import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import {AlertController, NavController} from 'ionic-angular';
import secondPage from '../welcome-page/welcome-page';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public alertCtrl: AlertController, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser(){
    const {username, password} = this.loginForm.value;    
    if(username !== 'krshubham' || password != 'shubhi'){
      const alert = this.alertCtrl.create({
        title: 'Invalid credentials',
        subTitle: 'Please check the details again!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.navCtrl.push('secondPage');
  }
}
