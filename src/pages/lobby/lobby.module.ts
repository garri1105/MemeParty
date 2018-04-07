import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby';
import { PlayerListComponent } from '../../components/player-list/player-list'
import { LobbyButtonsComponent } from '../../components/lobby-buttons/lobby-buttons'

@NgModule({
  declarations: [
    LobbyPage,
    PlayerListComponent,
    LobbyButtonsComponent
  ],
  imports: [
    IonicPageModule.forChild(LobbyPage),
  ],
})
export class LobbyPageModule {}
