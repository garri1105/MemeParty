import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptioningPage } from './captioning';
import {RoundSlidesComponent} from "../../components/round-slides/round-slides";

@NgModule({
  declarations: [
    CaptioningPage,
    RoundSlidesComponent
  ],
  imports: [
    IonicPageModule.forChild(CaptioningPage),
  ],
})
export class CaptioningPageModule {}
