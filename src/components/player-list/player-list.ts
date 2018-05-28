import { Component } from '@angular/core';
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Observable} from "rxjs/Observable";
import {Room} from "../../models/room/room";

@Component({
  selector: 'player-list',
  templateUrl: 'player-list.html'
})
export class PlayerListComponent {

  room$: Observable<Room>;

  constructor(private roomData: RoomDataProvider) {
    this.room$ = this.roomData.getCurrentRoomRef().valueChanges();
  }
}
