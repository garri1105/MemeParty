import {Component, ViewChild} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {RoundSlidesComponent} from "../../components/round-slides/round-slides";

@IonicPage()
@Component({
  selector: 'page-captioning',
  templateUrl: 'captioning.html',
})
export class CaptioningPage {
  @ViewChild(RoundSlidesComponent) round: RoundSlidesComponent;
  constructor() {
  }

  ionViewWillEnter() {
    this.round.startRound();
  }

  ionViewWillLeave() {
    this.round.endRound();
  }
}

