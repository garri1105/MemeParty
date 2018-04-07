import { Component } from '@angular/core';

/**
 * Generated class for the LobbyButtonsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lobby-buttons',
  templateUrl: 'lobby-buttons.html'
})
export class LobbyButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello LobbyButtonsComponent Component');
    this.text = 'Hello World';
  }

}
