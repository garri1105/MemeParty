import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotingPage } from './voting';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    VotingPage,
  ],
  imports: [
    IonicPageModule.forChild(VotingPage),
    ComponentsModule
  ],
})
export class VotingPageModule {}
