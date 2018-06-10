import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRoomPage } from './create-room';

@NgModule({
  declarations: [
    CreateRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRoomPage),
  ],
})
export class CreateRoomPageModule {}
