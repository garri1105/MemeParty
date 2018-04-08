import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Player } from "../../models/player/player";
import { Room } from "../../models/room/room"
import {take} from "rxjs/operators";
import {RoomDataProvider} from "../../providers/room-data/room-data";


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
  listenToHost: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private roomData: RoomDataProvider) {

    this.setListenToHost();
    this.player = this.navParams.get("player");
    this.roomId = this.navParams.get("roomId");
    this.lobbyImage = "assets/imgs/placeholder.png";
    this.selectedImage = false;
    this.submittedImage = false;
    let that = this;

    this.getData = function(data) {
      return new Promise((resolve, reject) => {
        that.lobbyImage = "assets/memelibrary/" + data;
        that.selectedImage = true;
        resolve();
      });
    };
  }

  startGame() {
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.started = true;
        this.roomData.updateRoom(room);
      });
  }

  setListenToHost() {
    this.listenToHost = this.roomData.getRoomList()
      .valueChanges()
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        if (room.started) {
          this.navCtrl.setRoot('CaptioningPage', {roomId: this.roomId, player: this.player});
        }
      });
  }

  submit() {
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.images.push(this.lobbyImage);
        this.roomData.updateRoom(room);
      });

    this.submittedImage = true;
  }

  toPhotoSelection() {
    this.navCtrl.push('MemeLibraryPage', {
      callback: this.getData
    });
  }

  ionViewWillUnload() {
    this.listenToHost.unsubscribe();
  }
}
