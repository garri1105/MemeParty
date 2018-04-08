import {Component, Input} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meme-library',
  templateUrl: 'meme-library.html',
})
export class MemeLibraryPage {
  images: string[];
  imageIndex: number;
  callback: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.callback = this.navParams.get('callback');
  }

  getSelectedImage(event: any) {
    this.imageIndex = event;
  }

  toLobby() {
    let imageName = this.images[this.imageIndex];
    this.callback(imageName).then(this.navCtrl.pop());
  }

  ionViewWillLoad() {

    this.images = ("amitheonlyone.jpg\n" +
      "arielhippy.jpg\n" +
      "arthursfirst.jpg\n" +
      "awesomebaby.jpg\n" +
      "babylaugh.jpg\n" +
      "canttellif.jpg\n" +
      "confusedmath.jpg\n" +
      "crazygf.jpg\n" +
      "crying.jpg\n" +
      "drake.jpg\n" +
      "drunkbaby.jpg\n" +
      "drunkwednesday.jpg\n" +
      "expandingbrain.jpg\n" +
      "fatfaces.jpg\n" +
      "forcefeed.jpg\n" +
      "gotanymoreofthat.jpg\n" +
      "grandmatiny.jpg\n" +
      "grouplaugh.jpg\n" +
      "grumpycat.jpg\n" +
      "heartstages.jpg\n" +
      "iamyourfather.jpg\n" +
      "interestingman.jpg\n" +
      "iwillfindyou.jpg\n" +
      "jackiechan.jpg\n" +
      "josephducreux.jpg\n" +
      "kevinhart.jpg\n" +
      "killyourself.jpg\n" +
      "leonidas.jpg\n" +
      "lookatme.jpg\n" +
      "massbrawl.jpg\n" +
      "mauryresults.jpg\n" +
      "museumphotos.jpg\n" +
      "obamanotbad.jpg\n" +
      "onedoesnotsimply.jpg\n" +
      "peterparker.jpg\n" +
      "putin.jpg\n" +
      "quotations.jpg\n" +
      "sadmj.jpg\n" +
      "shutupandtakemymoney.jpg\n" +
      "sleeper.jpg\n" +
      "soyouretellingme.jpg\n" +
      "soyouthink.jpg\n" +
      "spongebobsecret.jpg\n" +
      "spongemock.jpg\n" +
      "teacherasks.jpg\n" +
      "theflooris.jpg\n" +
      "thinkaboutit.jpg\n" +
      "thinkingdino.jpg\n" +
      "tonystark.jpg\n" +
      "trumpbook.jpg\n" +
      "trumpcourage.jpg\n" +
      "trumpknot.jpg\n" +
      "trumpthink.jpg\n" +
      "whatifitoldyou.jpg\n" +
      "whyalienswontvisitus.jpg\n" +
      "woah.jpg\n" +
      "wristflip.jpg\n" +
      "yodawghaveuheard.jpg\n" +
      "youcanthangoutwithus.jpg\n" +
      "yuno.jpg").split('\n');
  }

}
