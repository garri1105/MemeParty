import { Component, Input } from '@angular/core';
import {NavController} from "ionic-angular";
import {Player} from "../../models/player/player";
import {Room} from "../../models/room/room";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import { Observable } from "rxjs/Observable";
import {take} from "rxjs/operators";


@Component({
  selector: 'player-list',
  templateUrl: 'player-list.html'
})
export class PlayerListComponent {
  playerNames: Observable<any[]>;
  @Input() roomId: string;

  constructor(private navCtrl: NavController, private roomData: RoomDataProvider) {
    // Extract player names from database
    this.roomData.getRoomList().valueChanges().subscribe(
      roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        let names = []
        for (let user of room.users) {
          names.push(user.name);
        }
        this.playerNames = Observable.of(names);
        console.log(room);
      });
  }

}
