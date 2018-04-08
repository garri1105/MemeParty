import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemeLibraryPage } from './meme-library';
import {MemeTilesComponent} from "../../components/meme-tiles/meme-tiles";

@NgModule({
  declarations: [
    MemeLibraryPage,
    MemeTilesComponent
  ],
  imports: [
    IonicPageModule.forChild(MemeLibraryPage),
  ],
})
export class MemeLibraryPageModule {}
