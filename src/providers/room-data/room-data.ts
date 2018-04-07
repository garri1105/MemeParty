import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Room} from "../../models/room/room";

@Injectable()
export class RoomDataProvider {

  roomList$ = this.db.list<Room>('room-list');

  constructor(private db: AngularFireDatabase) {
  }

  getRoomList() {
    return this.roomList$;
  }

  addRoom(room: Room) {
    this.roomList$.set(room.id, room);
  }

  updateRoom(room: Room) {
    this.roomList$.update(room.id, room);
  }
}
