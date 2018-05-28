import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemeLibraryPage } from './meme-library';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    MemeLibraryPage
  ],
  imports: [
    IonicPageModule.forChild(MemeLibraryPage),
    ComponentsModule
  ],
})
export class MemeLibraryPageModule {}
