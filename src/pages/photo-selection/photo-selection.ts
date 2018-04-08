import { Component } from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-photo-selection',
  templateUrl: 'photo-selection.html',
})
export class PhotoSelectionPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  callback: any;

  constructor(private navParams: NavParams) {
    this.callback = this.navParams.get('callback');

    this.tab1Root = 'MemeLibraryPage';
    this.tab2Root = 'CameraPage';
    this.tab3Root = 'PhotoLibraryPage'
  }
}
