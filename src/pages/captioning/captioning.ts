import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-captioning',
  templateUrl: 'captioning.html',
})
export class CaptioningPage {

	time: string;

	constructor(private navCtrl: NavController) {
    // Set countdown reference time
    let countDownOrigin = new Date().getTime();
    let that = this;

    // Update the count down every 1 second
    let x = setInterval(function() {
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = Math.floor((countDownOrigin + 4500 - now)/1000);

      that.time = distance + "s";

      // If the count down is finished, write some text
      if (distance == 0) {
        that.navCtrl.setRoot('VotingPage');
        clearInterval(x);
      }
		}, 1000);
	}
}

