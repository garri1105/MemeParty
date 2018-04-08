import { NgModule } from '@angular/core';
import { CreateJoinRoomComponent } from './create-join-room/create-join-room';
import { PlayerListComponent } from './player-list/player-list';
@NgModule({
	declarations: [CreateJoinRoomComponent,
    PlayerListComponent],
	imports: [],
	exports: [CreateJoinRoomComponent,
    PlayerListComponent]
})
export class ComponentsModule {}
