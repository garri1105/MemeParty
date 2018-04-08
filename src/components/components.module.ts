import { NgModule } from '@angular/core';
import { CreateJoinRoomComponent } from './create-join-room/create-join-room';
import { PlayerListComponent } from './player-list/player-list';
import { MemeTilesComponent } from './meme-tiles/meme-tiles';

@NgModule({
	declarations: [CreateJoinRoomComponent,
    PlayerListComponent,
    MemeTilesComponent],
	imports: [],
	exports: [CreateJoinRoomComponent,
    PlayerListComponent,
    MemeTilesComponent]
})
export class ComponentsModule {}
