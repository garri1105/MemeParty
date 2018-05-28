import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Room} from "../../models/room/room";
import {PlayerDataProvider} from "../../providers/player-data/player-data";
import {makeId} from "../../utils";
import {Player} from "../../models/player/player";

@Component({
  selector: 'create-join-room',
  templateUrl: 'create-join-room.html'
})
export class CreateJoinRoomComponent {

  player: Player;
  validId: boolean = true;
  roomId: string;

  constructor(private navCtrl: NavController,
              private roomData: RoomDataProvider,
              private playerData: PlayerDataProvider) {

    this.player = {
      id: makeId(10),
      name: 'Anonymous',
      score: 0,
      host: false,
      ready: false
    };
  }

  async enterRoom() {
    let room$ = this.roomData.getRoomRefById(this.roomId);
    if (room$) {
      this.validId = true;
      this.roomData.setCurrentRoom(this.roomId);
      this.roomData.addPlayer(this.player).then(() => {
        this.playerData.setPlayer(this.player, this.roomId);
        this.navCtrl.push('LobbyPage')
      });
    }
    else {
      this.validId = false;
    }
  }

  joinRoom() {
    this.player.host = false;
    this.enterRoom();
  }

  createRoom() {
    this.player.host = true;
    this.roomId = makeId(5);
    let room: Room = {
      id: this.roomId,
      ready: false,
      timer: -1,
      submissions: [],
      images: [],
      players: [],
    };

    this.roomData.addRoom(room).then(() => {
      this.enterRoom();
    });
  }
}
