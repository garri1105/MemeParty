import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoSelectionPage } from './photo-selection';

@NgModule({
  declarations: [
    PhotoSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoSelectionPage),
  ],
})
export class PhotoSelectionPageModule {}
