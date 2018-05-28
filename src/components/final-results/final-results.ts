import { Component } from '@angular/core';
import {Player} from "../../models/player/player";
import {Observable} from "rxjs/Observable";
import {RoomDataProvider} from "../../providers/room-data/room-data";


@Component({
  selector: 'final-results',
  templateUrl: 'final-results.html'
})
export class FinalResultsComponent {

  players$: Observable<Player[]>;

  constructor(private roomData: RoomDataProvider) {
    this.players$ = this.roomData.getPlayerListRef().valueChanges();
  }

}
