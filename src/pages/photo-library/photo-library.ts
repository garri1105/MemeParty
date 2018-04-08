import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-photo-library',
  templateUrl: 'photo-library.html',
})
export class PhotoLibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
