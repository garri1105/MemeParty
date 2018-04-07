import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoLibraryPage } from './photo-library';

@NgModule({
  declarations: [
    PhotoLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoLibraryPage),
  ],
})
export class PhotoLibraryPageModule {}
