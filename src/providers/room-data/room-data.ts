import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {Room} from "../../models/room/room";
import {Player} from "../../models/player/player";
import {Submission} from "../../models/submission/submission";

@Injectable()
export class RoomDataProvider {

  roomListRef = this.db.list<Room>('room-list');
  roomRef: AngularFireObject<Room>;
  timerRef: AngularFireObject<number>;
  readyRef: AngularFireObject<boolean>;
  playerListRef: AngularFireList<Player>;
  imageListRef: AngularFireList<string>;
  submissionListRef: AngularFireList<Submission>;

  constructor(private db: AngularFireDatabase) {
  }

  async addPlayer(player: Player) {
    return await this.playerListRef.set(player.id, player);
  }

  addImage(image: string) {
    this.imageListRef.push(image);
  }

  addSubmission(submission: Submission) {
    this.submissionListRef.set(submission.id, submission);
  }

  async setTimer(seconds: number) {
    return await this.timerRef.set(seconds);
  }

  async setReady(ready: boolean) {
    return await this.readyRef.set(ready);
  }

  getReadyRef() {
    return this.readyRef;
  }

  getTimerRef() {
    return this.timerRef;
  }

  getPlayerListRef() {
    return this.playerListRef;
  }

  getImageListRef() {
    return this.imageListRef;
  }

  getSubmissionListRef() {
    return this.submissionListRef;
  }

  getRoomRefById(id: string) {
    return this.db.object<Room>(`room-list/${id}`);
  }

  setCurrentRoom(id: string) {
    this.roomRef = this.db.object<Room>(`room-list/${id}`);
    this.playerListRef = this.db.list<Player>(`room-list/${id}/players`);
    this.imageListRef = this.db.list<string>(`room-list/${id}/images`);
    this.submissionListRef = this.db.list<Submission>(`room-list/${id}/submissions`);
    this.timerRef = this.db.object<number>(`${this.roomRef.query.ref.path}/timer`);
    this.readyRef = this.db.object<boolean>(`${this.roomRef.query.ref.path}/ready`);
  }

  getCurrentRoomRef() {
    return this.roomRef;
  }

  getRoomListRef() {
    return this.roomListRef;
  }

  async addRoom(room: Room) {
    return await this.roomListRef.set(room.id, room);
  }

  async updateRoom(room: Room) {
    return await this.roomListRef.set(room.id, room);
  }

  async removeRoom(room: Room) {
    return await this.roomListRef.remove(room.id);
  }
}
