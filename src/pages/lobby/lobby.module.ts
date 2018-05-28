import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LobbyPage
  ],
  imports: [
    IonicPageModule.forChild(LobbyPage),
    ComponentsModule
  ],
})
export class LobbyPageModule {}
