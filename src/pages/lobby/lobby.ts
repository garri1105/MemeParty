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
  selectedImage: boolean;
  submittedImage: boolean;
  getData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player");
    this.roomId = this.navParams.get("roomId");
    this.lobbyImage = "assets/imgs/placeholder.png";
    this.selectedImage = false;
    this.selectedImage = false;
    let that = this;

    this.getData = function(data) {
      return new Promise((resolve, reject) => {
        that.lobbyImage = "assets/memelibrary/" + data;
        that.selectedImage = true;
        resolve();
      });
    };
  }

  submit() {
    // Confirm the selected image and add it to the room

    this.submittedImage = true;
  }

  toPhotoSelection() {
    this.navCtrl.push('MemeLibraryPage', {
      callback: this.getData
    });
  }
}
