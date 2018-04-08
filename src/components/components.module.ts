import { NgModule } from '@angular/core';
import { CreateJoinRoomComponent } from './create-join-room/create-join-room';
import { PlayerListComponent } from './player-list/player-list';
import { LobbyButtonsComponent } from './lobby-buttons/lobby-buttons';
import { MemeTilesComponent } from './meme-tiles/meme-tiles';
@NgModule({
	declarations: [CreateJoinRoomComponent,
    PlayerListComponent,
    LobbyButtonsComponent,
    MemeTilesComponent],
	imports: [],
	exports: [CreateJoinRoomComponent,
    PlayerListComponent,
    LobbyButtonsComponent,
    MemeTilesComponent]
})
export class ComponentsModule {}
