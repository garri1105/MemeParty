import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptioningPage } from './captioning';

@NgModule({
  declarations: [
    CaptioningPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptioningPage),
  ],
})
export class CaptioningPageModule {}
