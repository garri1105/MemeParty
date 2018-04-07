import { Component, Input } from '@angular/core';
import {Player} from "../../models/player/player";

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

  text: string;
  @Input() player: Player

  constructor() {
    console.log('Hello PlayerListComponent Component');
    this.text = 'Player list';
  }

}
