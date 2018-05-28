import {Player} from "../player/player";
import {Submission} from "../submission/submission";

export interface Room {
  id: string;
  players: Player[];
  submissions: Submission[];
  images: string[];
  ready: boolean;
  timer: number;
}
