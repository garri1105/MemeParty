import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Player } from "../../models/player/player";
import { Room } from "../../models/room/room"

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
  roomId: string;
  lobbyImage: string;
  imageName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player");
    this.roomId = this.navParams.get("roomId");
    this.lobbyImage = this.navParams.get("image");
    if (!this.lobbyImage) {
      this.lobbyImage = "../../assets/imgs/placeholder.png"
    }
  }

  getData = function(data) {
    return new Promise((resolve, reject) => {
      this.imageName = data;
      resolve();
    });
  };

  toPhotoSelection() {
    this.navCtrl.push('MemeLibraryPage', {
      callback: this.getData
    });
  }
}
