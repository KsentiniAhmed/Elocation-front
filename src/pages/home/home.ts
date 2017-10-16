import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {JwtHelper, AuthHttp} from "angular2-jwt";
import {SERVER_URL} from "../../config";
import {AuthProvider} from "../../providers/auth/auth";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user: string;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly authProvider: AuthProvider,
  jwtHelper: JwtHelper,
  private readonly  authHttp: AuthHttp) {

  this.authProvider.authUser.subscribe(jwt => {
  if (jwt) {
    const decoded = jwtHelper.decodeToken(jwt);
    this.user = decoded.sub
  }
  else {
  this.user = null;
}
});

}

ionViewWillEnter() {
  this.authHttp.get(`${SERVER_URL}/secret`).subscribe(
    data => this.message = data.text(),
    err => console.log(err)
  );
}

logout() {
  this.authProvider.logout();
}


ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
