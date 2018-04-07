import {Component} from '@angular/core';
import {Player} from "../../models/player/player";
import {NavController} from "ionic-angular";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Room} from "../../models/room/room";
import {take} from "rxjs/operators";

@Component({
  selector: 'create-join-room',
  templateUrl: 'create-join-room.html'
})
export class CreateJoinRoomComponent {

  player = {} as Player;
  roomId: string;

  constructor(private navCtrl: NavController, private roomData: RoomDataProvider) {
  }

  joinRoom() {
    this.player.host = false;
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.users.push(this.player);
        this.roomData.updateRoom(room);
      });
    this.navCtrl.push('LobbyPage', {'player': this.player, 'roomKey': this.roomId});
  }

  createRoom() {
    this.player.host = true;
    let room: Room = {
      id: CreateJoinRoomComponent.makeId(5),
      users: [this.player]
    };

    this.roomData.addRoom(room);

    this.navCtrl.push('LobbyPage', {'player': this.player, 'roomKey': room.id});
  }

  static makeId(length: number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
