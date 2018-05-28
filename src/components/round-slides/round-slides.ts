import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from "ionic-angular";
import {Submission} from "../../models/submission/submission";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Observable} from "rxjs/Observable";
import {PlayerDataProvider} from "../../providers/player-data/player-data";
import {Subscription} from "rxjs/Subscription";
import {makeId} from "../../utils";

const TIME = 5;


// TODO instead of using room for timer use a Round object. Makes voting easier as well
@Component({
  selector: 'round-slides',
  templateUrl: 'round-slides.html'
})
export class RoundSlidesComponent {
  @ViewChild('slides') slides: Slides;
  submitted: boolean;
  caption: string;
  images$: Observable<string[]>;
  timerListener: Subscription;
  displayedTime: string;
  roundNumber: number;
  totalRounds: number;

  constructor(private navCtrl: NavController,
              private roomData: RoomDataProvider,
              private playerData: PlayerDataProvider) {

    this.totalRounds = 0;
    this.roundNumber = 0;
    setTimeout(() => {
      this.slides.lockSwipes(true);
    }, 1);

    this.images$ = this.roomData.getImageListRef().valueChanges();
    this.images$.forEach(images => {
      this.totalRounds = images.length;
    });
  }

  async submitCaption(image: string) {
    this.submitted = true;
    let submission: Submission = {
      id: makeId(10),
      imagePath: image,
      player: await this.playerData.getPlayer(),
      caption: this.caption,
      score: 0
    };

    this.roomData.addSubmission(submission);
  }

  initTimer() {
    let time = TIME;
    this.roomData.setTimer(TIME);
    let timer = setInterval(async () => {
      await this.roomData.setTimer(--time);
      if (time === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  setTimerListener() {
    this.timerListener =
      this.roomData.getTimerRef()
        .valueChanges()
        .subscribe(time => {
          this.displayedTime = time.toString();
          if (time === 0) {
            this.navCtrl.push('VotingPage')
          }
        });
  }

  startRound() {
    this.playerData.setReady(false);
    this.roundNumber++;
    console.log('Entering slides');
    console.log('Round number' + this.roundNumber);
    console.log(this.totalRounds);
    if (this.playerData.isHost()) {
      this.initTimer();
    }
    this.setTimerListener();
    if (this.roundNumber <= this.totalRounds || this.totalRounds === 0) {
      this.caption = '';
      this.submitted = false;
      if (this.roundNumber !== 1) {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }
    }
    else {
      console.log('Setting winners as root');
      this.navCtrl.setRoot('WinnersPage');
    }
  }

  endRound() {
    console.log('Leaving slides');
    if (this.playerData.isHost()) {
      this.initTimer();
    }
    this.timerListener.unsubscribe();
  }
}
