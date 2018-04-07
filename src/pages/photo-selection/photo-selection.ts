import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-photo-selection',
  templateUrl: 'photo-selection.html',
})
export class PhotoSelectionPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  constructor() {
    this.tab1Root = 'MemeLibraryPage';
    this.tab2Root = 'CameraPage';
    this.tab3Root = 'PhotoLibraryPage'
  }
}
