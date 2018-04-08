import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-winners',
  templateUrl: 'winners.html',
})
export class WinnersPage {

  roomId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roomId = this.navParams.get('roomId');
    console.log(this.roomId);
  }

}
