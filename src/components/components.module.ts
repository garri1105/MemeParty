import { NgModule } from '@angular/core';
import { CreateJoinRoomComponent } from './create-join-room/create-join-room';
import { PlayerListComponent } from './player-list/player-list';
import { MemeTilesComponent } from './meme-tiles/meme-tiles';
import { RoundSlidesComponent } from './round-slides/round-slides';

@NgModule({
	declarations: [CreateJoinRoomComponent,
    PlayerListComponent,
    MemeTilesComponent,
    RoundSlidesComponent],
	imports: [],
	exports: [CreateJoinRoomComponent,
    PlayerListComponent,
    MemeTilesComponent,
    RoundSlidesComponent]
})
export class ComponentsModule {}
