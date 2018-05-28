import { Injectable } from '@angular/core';
import {Player} from "../../models/player/player";
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import {take} from "rxjs/operators";
import {Room} from "../../models/room/room";

@Injectable()
export class PlayerDataProvider {

  player: Player;
  playerRef: AngularFireObject<Player>;
  roomRef: AngularFireObject<Room>;

  constructor(private db: AngularFireDatabase) {

  }

  setPlayerScoreById(id: string, score: number) {
    this.db.object(`${this.roomRef.query.ref.path}/players/${id}`).update({score: score})
  }

  setPlayer(player: Player, roomId: string) {
    this.playerRef = this.db.object<Player>(`room-list/${roomId}/players/${player.id}`);
    this.roomRef = this.db.object<Room>(`room-list/${roomId}`);
  }

  setPlayerName(name: string) {
    this.playerRef.update({name: name});
  }

  setReady(ready: boolean) {
    this.playerRef.update({ready: ready});
  }

  setHost(host: boolean) {
    this.playerRef.update({host: host});
  }

  setScore(score: number) {
    this.playerRef.update({score: score});
  }

  async getPlayer() {
    await this.syncPlayer();
    return this.player;
  }

  getName() {
    return this.player.name;
  }

  async getScore() {
    await this.syncPlayer();
    return this.player.score;
  }

  isHost() {
    return this.player.host;
  }

  getId() {
    return this.player.id;
  }

  private async syncPlayer() {
    return new Promise((resolve) => {
      this.playerRef
        .valueChanges()
        .pipe(take(1))
        .subscribe(player => {
          this.player = player;
          resolve();
        });
    });
  }
}
