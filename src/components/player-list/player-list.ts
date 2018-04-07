import { Component, Input } from '@angular/core';
import {Player} from "../../models/player/player";
import {Room} from "../../models/room/room";

/**
 * Generated class for the PlayerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'player-list',
  templateUrl: 'player-list.html'
})
export class PlayerListComponent {

  @Input() room: Room

  constructor() {

  }

}
