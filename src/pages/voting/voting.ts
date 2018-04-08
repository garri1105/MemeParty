import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Submission } from "../../models/submission/submission";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {listChanges} from "angularfire2/database";
import {take} from "rxjs/operators";
import {copy} from "@ionic/app-scripts";

@IonicPage()
@Component({
  selector: 'page-voting',
  templateUrl: 'voting.html',
})
export class VotingPage {

  submissions: Submission[];
  roomId: string;
  count: number;
  voted: boolean;
  parent: any;
  listenToPlayers: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private roomData: RoomDataProvider,
              private alert: AlertController) {

    this.voted = false;
    this.parent = this.navParams.get('parent');
    this.roomId = this.navParams.get('roomId');
    this.getSubmissions();
    this.setListenToPlayers();
  }

  getSubmissions() {
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.submissions.splice(0, 1);
        this.submissions = room.submissions;
      });
  }

  setListenToPlayers() {
    this.listenToPlayers = this.roomData.getRoomList()
      .valueChanges()
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        if (room.voteCount === room.submissions.length - 1) {
          let results = this.getResults(room.submissions);
          let resultString = results.map(r => r.player + ':' + r.score).join('');
          console.log(results);
          console.log(resultString);
          let alert = this.alert.create({
            title: 'Round results!',
            message: resultString
          });
          alert.present();
          setTimeout(() => {
            this.parent.ionViewWillEnter();
            alert.dismiss();
            this.navCtrl.pop();
          }, 5000);
        }
      });
  }

  getResults(submissions: Submission[]) {
    let filtered = submissions.filter(sub => sub.score > 0);
    filtered.sort((a: Submission, b: Submission) => {return b.score - a.score});
    return filtered;
  }

  vote(index: number) {
    this.voted = true;
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.submissions[index+1].score += 1;
        room.voteCount += 1;
        this.count = room.voteCount;
        this.roomData.updateRoom(room);
      });
  }

  ionViewWillLeave() {
    this.listenToPlayers.unsubscribe();

    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.voteCount = 0;
        room.submissions = [{player: '0'} as Submission];
        this.roomData.updateRoom(room);
      });
  }
}
