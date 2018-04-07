import {Component, Input} from '@angular/core';
import {Player} from "../../models/player/player";
import {Room} from "../../models/room/room";

@Component({
  selector: 'create-join-room',
  templateUrl: 'create-join-room.html'
})
export class CreateJoinRoomComponent {

  player = {} as Player;
  room = {} as Room;

  constructor() {

  }
}
