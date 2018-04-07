import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {CreateJoinRoomComponent} from "../../components/create-join-room/create-join-room";

@NgModule({
  declarations: [
    HomePage,
    CreateJoinRoomComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
