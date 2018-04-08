import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Player } from "../../models/player/player";
import { Room } from "../../models/room/room"


@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  player: Player;
  roomId: string;
  lobbyImage: string;
  getData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player");
    this.roomId = this.navParams.get("roomId");
    this.lobbyImage = "../../assets/imgs/placeholder.png";
    let that = this;

    this.getData = function(data) {
      return new Promise((resolve, reject) => {
        that.lobbyImage = "../../assets/memelibrary/" + data;
        console.log(that.lobbyImage);
        resolve();
      });
    };
  }

  toPhotoSelection() {
    this.navCtrl.push('MemeLibraryPage', {
      callback: this.getData
    });
  }
}
