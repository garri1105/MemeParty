import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Submission } from "../../models/submission/submission";

@IonicPage()
@Component({
  selector: 'page-voting',
  templateUrl: 'voting.html',
})
export class VotingPage {

  submissions: Submission[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.submissions = [{imagePath:"gotanymoreofthat.jpg", caption:"You got any more of that good stuff?"} as Submission,
                        {imagePath:"awesomebaby.jpg", caption:"Fuck yeah"} as Submission,
                        {imagePath:"killyourself.jpg", caption:"Woah There"} as Submission];
  }


}
