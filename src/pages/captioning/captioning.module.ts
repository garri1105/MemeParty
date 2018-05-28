import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptioningPage } from './captioning';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CaptioningPage
  ],
  imports: [
    IonicPageModule.forChild(CaptioningPage),
    ComponentsModule
  ],
})
export class CaptioningPageModule {}
