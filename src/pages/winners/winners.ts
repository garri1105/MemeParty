import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Player } from "../../models/player/player";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Room} from "../../models/room/room";
import {take} from "rxjs/operators";

@IonicPage()
@Component({
  selector: 'page-winners',
  templateUrl: 'winners.html',
})
export class WinnersPage {

  roomId: string;
  players: Player[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private roomData: RoomDataProvider) {

    this.roomId = this.navParams.get('roomId');
    //this.getPlayersFromRoom();
    this.players = [{name: "Joe", score:42} as Player,
                   {name: "Teddy", score:12} as Player,
                   {name: "Nancy", score:5} as Player]
    //console.log(this.players)
  }

  getPlayersFromRoom() {
    // Find room in database and get the players from the room
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        this.players = room.users;
      });

    // Sort the players according to score from highest to lowest

  }

}
