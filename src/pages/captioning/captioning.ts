import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-captioning',
  templateUrl: 'captioning.html',
})
export class CaptioningPage {

	time:string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	// Set countdown reference time
	var countDownOrigin = new Date().getTime();
	var that = this;

	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = Math.floor((countDownOrigin + 45000 - now)/1000);

		that.time = distance + "s";

  		// If the count down is finished, write some text 
  		if (distance < 0) {
    	clearInterval(x);
    	document.getElementById("demo").innerHTML = "SUBMISSIONS OVER!";
  		}
  		console.log(this.time);
		}, 1000);

	}

	ionViewDidLoad() {
    	console.log('ionViewDidLoad CaptioningPage');
  	}


}

