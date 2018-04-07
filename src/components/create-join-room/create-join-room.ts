import {Component, Input} from '@angular/core';
import {Player} from "../../models/player/player";

@Component({
  selector: 'create-join-room',
  templateUrl: 'create-join-room.html'
})
export class CreateJoinRoomComponent {

  @Input() player: Player;
  constructor() {
  }
}
