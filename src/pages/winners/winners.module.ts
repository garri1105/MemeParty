import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinnersPage } from './winners';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    WinnersPage,
  ],
  imports: [
    IonicPageModule.forChild(WinnersPage),
    ComponentsModule
  ],
})
export class WinnersPageModule {}
