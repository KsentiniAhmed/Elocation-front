import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the AnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonces',
  templateUrl: 'annonces.html',
})
export class AnnoncesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private readonly authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncesPage');
  }
  logout() {
    this.authProvider.logout();
  }

}
