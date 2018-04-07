import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Player} from "../../models/player/player";

/**
 * Generated class for the LobbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  player: Player;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

}
