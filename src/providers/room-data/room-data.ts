import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Room} from "../../models/room/room";

@Injectable()
export class RoomDataProvider {

  roomList$ = this.db.list('room-list');

  constructor(private db: AngularFireDatabase) {
  }

  joinRoom(roomId: string) {
    return {id: roomId} as Room;
  }

  createRoom() {
    this.roomList$.push({} as Room);
    return {id: 'abc'} as Room;
  }
}
