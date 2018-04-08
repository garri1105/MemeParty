import {Player} from "../player/player";

export interface Room {
  id: string;
  users: Player[];
  images: string[];
}
