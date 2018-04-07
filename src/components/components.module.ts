import { NgModule } from '@angular/core';
import { CreateJoinRoomComponent } from './create-join-room/create-join-room';
import { PlayerListComponent } from './player-list/player-list';
import { LobbyButtonsComponent } from './lobby-buttons/lobby-buttons';
@NgModule({
	declarations: [CreateJoinRoomComponent,
    PlayerListComponent,
    LobbyButtonsComponent],
	imports: [],
	exports: [CreateJoinRoomComponent,
    PlayerListComponent,
    LobbyButtonsComponent]
})
export class ComponentsModule {}
