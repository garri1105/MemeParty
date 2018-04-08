import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'lobby-buttons',
  templateUrl: 'lobby-buttons.html'
})
export class LobbyButtonsComponent {

  data: string;
  constructor(private navCtrl: NavController) {
  }

  getData = function(data) {
    return new Promise((resolve, reject) => {
      this.data = data;
      resolve();
    }).then(r => console.log(this.data));
  };

  toPhotoSelection() {
    this.navCtrl.push('MemeLibraryPage', {
      callback: this.getData
    });
  }
}
