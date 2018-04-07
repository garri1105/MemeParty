import {Component} from '@angular/core';
import {Player} from "../../models/player/player";
import {NavController} from "ionic-angular";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Room} from "../../models/room/room";

@Component({
  selector: 'create-join-room',
  templateUrl: 'create-join-room.html'
})
export class CreateJoinRoomComponent {

  player = {} as Player;
  room = {} as Room;

  constructor(private navCtrl: NavController, private roomData: RoomDataProvider) {
  }

  joinRoom() {
    this.room = this.roomData.joinRoom(this.room.id);
    this.player.host = false;
    this.navCtrl.push('LobbyPage', {'player': this.player, 'room': this.room});
  }

  createRoom() {
    this.room = this.roomData.createRoom();
    this.player.host = true;
    this.navCtrl.push('LobbyPage', {'player': this.player, 'room': this.room});
  }
}
