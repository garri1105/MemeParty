import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  createRoom() {
    this.navCtrl.push('CreateRoomPage');
  }

  joinRoom() {
    this.navCtrl.push('JoinRoomPage');
  }

  howToPlay() {
    this.navCtrl.push('HowToPlayPage');
  }
}
