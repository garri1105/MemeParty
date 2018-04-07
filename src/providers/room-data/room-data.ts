import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Room} from "../../models/room/room";
import {take} from "rxjs/operators";

@Injectable()
export class RoomDataProvider {

  roomList$ = this.db.list<Room>('room-list');

  constructor(private db: AngularFireDatabase) {
  }

  joinRoom(roomId: string) {
    this.roomList$.snapshotChanges().pipe(take(1)).subscribe();
    return {id: roomId} as Room;
  }

  createRoom() {
    let room = {id: RoomDataProvider.makeId(10)} as Room;
    this.roomList$.push(room);
    return room;
  }

  static makeId(length: number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
