import {Component, Input, ViewChild} from '@angular/core';
import {NavController, Slides} from "ionic-angular";
import {Submission} from "../../models/submission/submission";
import {take} from "rxjs/operators";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Player} from "../../models/player/player";
import * as moment from "moment";
import {WinnersPage} from "../../pages/winners/winners";

@Component({
  selector: 'round-slides',
  templateUrl: 'round-slides.html'
})
export class RoundSlidesComponent {
  @ViewChild('slides') slides: Slides;
  @Input() images: string[];
  @Input() roomId: string;
  @Input() player: Player;
  time: string;
  submitted: boolean;
  caption: string;
  timer: any;

  secondsTimer = 8;

  constructor(private navCtrl: NavController,
              private roomData: RoomDataProvider) {
    this.initTimer();

    setTimeout(() => {
      this.slides.lockSwipes(true);
    }, 1);
  }

  submitCaption(image: string) {
    this.submitted = true;
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        console.log('submitting1');
        let room = roomList.filter(room => room.id === this.roomId)[0];
        let submission: Submission = {
          imagePath: image,
          player: this.player.name,
          caption: this.caption,
          score: 0};

        room.submissions.push(submission);
        console.log('submitting2');
        this.roomData.updateRoom(room);
      });
  }

  initTimer() {
    let that = this;
    let then = moment();
    then.add(that.secondsTimer, 'seconds');
    this.timer = setInterval(function() {
      let now = moment();
      that.time = `${then.seconds() - now.seconds()}`;

      if (that.time === '0') {
        that.navCtrl.push('VotingPage', {parent: that, roomId: that.roomId, player: that.player}).then(r => clearInterval(that.timer));
      }
    }, 1000);
  }

  resetTimer() {
    this.initTimer();
  }

  resetView() {
    console.log('Entering slides');
    if (this.slides.getActiveIndex() < this.slides.length() - 1) {
      this.caption = '';
      this.submitted = false;
      this.initTimer();
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
    }
    else {
      this.navCtrl.push('WinnersPage', {roomId: this.roomId});
    }
  }
}
