import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Subscription} from "rxjs/Subscription";
import {Player} from "../../models/player/player";
import {PlayerDataProvider} from "../../providers/player-data/player-data";


@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  player: Player;
  lobbyImage: string;
  selectedImage: boolean;
  submittedImage: boolean;
  getData: any;
  readyListener: Subscription;
  playerListener: Subscription;
  playersReady: boolean;

  constructor(private navCtrl: NavController,
              private roomData: RoomDataProvider,
              private playerData: PlayerDataProvider) {

    this.playerData.getPlayer().then(player => {
      this.player = player;
      if (this.player.host) {
        this.setPlayerReadyListener();
      }
    });

    this.setReadyListener();
    this.lobbyImage = "assets/imgs/placeholder.png";
    this.selectedImage = false;
    this.submittedImage = false;
    let that = this;

    // TODO Handle error: If no image is selected when clicking done
    this.getData = function(data) {
      return new Promise((resolve) => {
        that.lobbyImage = "assets/memelibrary/" + data;
        that.selectedImage = true;
        resolve();
      });
    };
  }

  async startGame() {
    await this.roomData.setReady(true);
  }

  setReadyListener() {
    this.readyListener =
      this.roomData.getReadyRef()
        .valueChanges()
        .subscribe(ready => {
          if (ready) {
            this.navCtrl.setRoot('CaptioningPage');
          }
      });
  }

  setPlayerReadyListener() {
    this.playerListener =
      this.roomData.getPlayerListRef()
        .valueChanges()
        .subscribe(async players => {
          let notReady = 0;
          for (const [, player] of Object.entries(players)) {
            console.log('Player ' + player);
            if (!player.ready) {
              notReady++;
            }
          }

          console.log('NotReady: ' + notReady);
          if (!notReady) {
            this.playersReady = true;
          }
        });
  }

  submit() {
    this.roomData.addImage(this.lobbyImage);
    this.submittedImage = true;
    this.playerData.setReady(true);
  }

  toPhotoSelection() {
    this.navCtrl.push('MemeLibraryPage', {
      callback: this.getData
    });
  }

  ionViewWillUnload() {
    this.readyListener.unsubscribe();
    if (this.player.host) {
      this.playerListener.unsubscribe();
    }
  }
}
