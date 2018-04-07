import {Component, Input} from '@angular/core';
import {Player} from "../../models/player/player";
import {Room} from "../../models/room/room";
import {NavController} from "ionic-angular";

@Component({
  selector: 'create-join-room',
  templateUrl: 'create-join-room.html'
})
export class CreateJoinRoomComponent {

  player = {} as Player;
  roomId: string;

  constructor(private navCtrl: NavController) {
  }

  toLobbyPage() {
    this.player.host = true;
    this.navCtrl.push('LobbyPage', {'player': this.player, 'roomId': this.roomId});
  }
}
