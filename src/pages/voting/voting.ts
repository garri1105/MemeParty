import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Submission } from "../../models/submission/submission";
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {listChanges} from "angularfire2/database";
import {take} from "rxjs/operators";
import {copy} from "@ionic/app-scripts";
import {Player} from "../../models/player/player";

@IonicPage()
@Component({
  selector: 'page-voting',
  templateUrl: 'voting.html',
})
export class VotingPage {

  submissions: Submission[];
  player: Player;
  roomId: string;
  count: number;
  voted: boolean;
  parent: any;
  listenToPlayers: any;
  updated: boolean;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private roomData: RoomDataProvider,
              private alert: AlertController) {

    this.voted = false;
    this.parent = this.navParams.get('parent');
    this.roomId = this.navParams.get('roomId');
    this.player = this.navParams.get('player');
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

        //console.log('VoteCount: ' + room.voteCount);
        //console.log('Submissions: ' + (room.submissions.length - 1));
        if (room.submissions.length - 1 !== 0 && room.voteCount === room.submissions.length - 1) {
          let results = this.getResults(room.submissions);
          let resultString = results.map(r => r.player + ':' + r.score).join('\n');

          for (let i = 0; i < room.users.length; i++) {
            for(let j = 0; j < results.length; j++) {
              if (room.users[i].name.trim() === results[j].player.trim()) {
                room.users[i].score += results[j].score;
              }
            }
          }
          if (!this.updated) {
            this.roomData.updateRoom(room);
            this.updated = true;
          }

          let alert = this.alert.create({
            title: 'Round results!',
            message: resultString
          });
          alert.present();
          setTimeout(() => {
            alert.dismiss();
            //console.log('popping page');
            this.navCtrl.pop().then(r => this.parent.resetView());
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
        setTimeout(() => this.roomData.updateRoom(room), 5);
      });
  }

  ionViewWillLeave() {
    //console.log('unsubscribing');
    this.listenToPlayers.unsubscribe();

    if (this.player.host && this.voted) {
      setTimeout(() => this.roomData.getRoomList()
        .valueChanges().pipe(take(1))
        .subscribe(roomList => {
          let room = roomList.filter(room => room.id === this.roomId)[0];
          //console.log('wipingData');
          room.voteCount = 0;
          room.submissions = [{player: '0'} as Submission];
          this.roomData.updateRoom(room);
        }), 1000);
    }
  }
}
