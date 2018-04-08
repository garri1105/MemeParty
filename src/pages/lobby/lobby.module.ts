import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby';
import { PlayerListComponent } from '../../components/player-list/player-list'

@NgModule({
  declarations: [
    LobbyPage,
    PlayerListComponent],
  imports: [
    IonicPageModule.forChild(LobbyPage),
  ],
})
export class LobbyPageModule {}
