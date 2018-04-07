import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemeLibraryPage } from './meme-library';

@NgModule({
  declarations: [
    MemeLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(MemeLibraryPage),
  ],
})
export class MemeLibraryPageModule {}
