import {Player} from "../player/player";

export interface Room {
  id?: string;
  name: string;
  users: Player[];
}
