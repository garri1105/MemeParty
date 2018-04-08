import {Component, Input, ViewChild} from '@angular/core';
import {NavController, Slides} from "ionic-angular";
import {Submission} from "../../models/submission/submission";

@Component({
  selector: 'round-slides',
  templateUrl: 'round-slides.html'
})
export class RoundSlidesComponent {
  @ViewChild('slides') slides: Slides;
  @Input() images: string[];
  time: string;
  submissions: Submission[];
  caption: string;
  timer: any;

  constructor(private navCtrl: NavController) {
    this.initTimer();

    setTimeout(() => {
      this.slides.lockSwipes(true);
    }, 1);
  }

  submitCaption() {
    console.log(this.caption);
  }

  initTimer() {
    let countDownOrigin = new Date().getTime();
    let that = this;

    this.timer = setInterval(function() {
      let now = new Date().getTime();
      let distance = Math.floor((countDownOrigin + 45000 - now)/1000);
      that.time = distance+'';

      if (distance == 0) {
        that.navCtrl.push('VotingPage', {'parent': that});
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.initTimer();
  }

  ionViewWillEnter() {
    this.resetTimer();
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
}
