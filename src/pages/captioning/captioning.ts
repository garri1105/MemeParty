import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {RoomDataProvider} from "../../providers/room-data/room-data";
import {Submission} from "../../models/submission/submission";
import {take} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-captioning',
  templateUrl: 'captioning.html',
})
export class CaptioningPage {

  images: string[];
  roomId: string;
  constructor(private roomData: RoomDataProvider,
              private navParams: NavParams) {

    this.roomId = this.navParams.get('roomId');
    this.getImages();
  }

  getImages() {
    this.roomData.getRoomList()
      .valueChanges().pipe(take(1))
      .subscribe(roomList => {
        let room = roomList.filter(room => room.id === this.roomId)[0];
        room.images.splice(0, 1);
        this.images = room.images;
    });
  }
}

