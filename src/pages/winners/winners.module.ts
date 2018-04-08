import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinnersPage } from './winners';

@NgModule({
  declarations: [
    WinnersPage,
  ],
  imports: [
    IonicPageModule.forChild(WinnersPage),
  ],
})
export class WinnersPageModule {}
