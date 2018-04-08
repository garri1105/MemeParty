import {Component, Input, ViewChild} from '@angular/core';
import {NavController, Slides} from "ionic-angular";
import {Submission} from "../../models/submission/submission";
import {take} from "rxjs/operators";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Player} from "../../models/player/player";

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
        let room = roomList.filter(room => room.id === this.roomId)[0];
        let submission: Submission = {
          imagePath: image,
          player: this.player.name,
          caption: this.caption,
          score: 0};

        room.submissions.push(submission);
        this.roomData.updateRoom(room);
      });
  }

  initTimer() {
    let countDownOrigin = new Date().getTime();
    let that = this;

    this.timer = setInterval(function() {
      let now = new Date().getTime();
      let distance = Math.floor((countDownOrigin + 10000 - now)/1000);
      that.time = distance+'';

      if (distance === 0) {
        that.navCtrl.push('VotingPage', {parent: that, roomId: that.roomId});
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.initTimer();
  }

  ionViewWillEnter() {
    if (this.slides.getActiveIndex() < this.slides.length() - 1) {
      this.caption = '';
      this.submitted = false;
      this.resetTimer();
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
    }
    else {
      this.navCtrl.push('WinnersPage', {roomId: this.roomId});
    }
  }
}
