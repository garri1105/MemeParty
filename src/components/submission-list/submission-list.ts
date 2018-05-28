import {Component} from '@angular/core';
import {Submission} from "../../models/submission/submission";
import {AlertController, NavController} from "ionic-angular";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {PlayerDataProvider} from "../../providers/player-data/player-data";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'submission-list',
  templateUrl: 'submission-list.html'
})
export class SubmissionListComponent {

  voted: boolean;
  playerListener: Subscription;
  readyListener: Subscription;
  submissions$: Observable<Submission[]>;

  constructor(private navCtrl: NavController,
              private roomData: RoomDataProvider,
              private playerData: PlayerDataProvider,
              private alert: AlertController) {

    this.submissions$ = this.roomData.getSubmissionListRef().valueChanges();
  }

  setReadyListener() {
    this.readyListener =
      this.roomData.getCurrentRoomRef()
        .valueChanges()
        .subscribe(room => {
          if (room.ready) {
            // TODO Have a better round result display
            let results = this.filterSubmissions(room.submissions);
            let resultString = results.map(r => r.player.name + ':' + r.score).join('\n');

            let alert = this.alert.create({
              title: 'Round results!',
              message: resultString
            });
            alert.present();
            setTimeout(() => {
              alert.dismiss();
              this.navCtrl.pop();
            }, 5000);
          }
        })
  }

  setPlayerListener() {
    this.playerListener =
      this.roomData.getPlayerListRef()
        .valueChanges()
        .subscribe(async players => {
          let notReady = 0;
          for (const [, player] of Object.entries(players)) {
            if (!player.ready) {
              notReady++;
            }
          }

          console.log('NotReady: ' + notReady);
          if (!notReady) {
            await this.roomData.setReady(true);
          }
        });
  }

  filterSubmissions(submissions: Submission[]) {
    let filtered = [];
    for (const [, submission] of Object.entries(submissions)) {
      if (submission.score > 0) {
        filtered.push(submission);
      }
    }
    filtered.sort((a: Submission, b: Submission) => {return b.score - a.score});
    return filtered;
  }

  vote(submission: Submission) {
    submission.player.score += 1;
    submission.score += 1;
    this.roomData.getSubmissionListRef().update(submission.id, submission);
    console.log('vote: Setting player score');
    this.playerData.setPlayerScoreById(submission.player.id, submission.player.score);
    console.log('vote: Setting player true');
    this.playerData.setReady(true);
    this.voted = true;
  }

  async startVoting() {
    console.log('Entering SubList');
    await this.roomData.setReady(false);
    console.log('Startvoting: Setting player false');
    await this.playerData.setReady(false);

    if (this.playerData.isHost()) {
      this.setPlayerListener();
    }
    this.setReadyListener();

    this.voted = false;
  }

  endVoting() {
    console.log('Leaving SubList');
    this.readyListener.unsubscribe();
    if (this.playerData.isHost()) {
      this.playerListener.unsubscribe();
      this.roomData.getCurrentRoomRef().update({submissions: []});
    }
  }
}
