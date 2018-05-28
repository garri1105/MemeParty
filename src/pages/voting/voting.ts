import {Component, ViewChild} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {SubmissionListComponent} from "../../components/submission-list/submission-list";

@IonicPage()
@Component({
  selector: 'page-voting',
  templateUrl: 'voting.html',
})
export class VotingPage {
  @ViewChild(SubmissionListComponent) voting: SubmissionListComponent;
  constructor () {
  }

  ionViewWillEnter() {
    this.voting.startVoting();
  }

  ionViewWillLeave() {
    this.voting.endVoting();
  }
}
