import { NgModule } from '@angular/core';
import { CreateJoinRoomComponent } from './create-join-room/create-join-room';
import { PlayerListComponent } from './player-list/player-list';
import { MemeTilesComponent } from './meme-tiles/meme-tiles';
import { RoundSlidesComponent } from './round-slides/round-slides';
import {IonicModule} from "ionic-angular";
import {PipesModule} from "../pipes/pipes.module";
import { SubmissionListComponent } from './submission-list/submission-list';
import { FinalResultsComponent } from './final-results/final-results';

@NgModule({
	declarations: [CreateJoinRoomComponent,
    PlayerListComponent,
    MemeTilesComponent,
    RoundSlidesComponent,
    SubmissionListComponent,
    FinalResultsComponent],
	imports: [IonicModule, PipesModule],
	exports: [CreateJoinRoomComponent,
    PlayerListComponent,
    MemeTilesComponent,
    RoundSlidesComponent,
    SubmissionListComponent,
    FinalResultsComponent]
})
export class ComponentsModule {}
