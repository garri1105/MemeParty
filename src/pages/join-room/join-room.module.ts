import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinRoomPage } from './join-room';

@NgModule({
  declarations: [
    JoinRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinRoomPage),
  ],
})
export class JoinRoomPageModule {}
