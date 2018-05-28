import {Player} from "../player/player";

export interface Submission {
  id: string;
  player: Player;
  imagePath: string;
  caption: string;
  score: number;
}
