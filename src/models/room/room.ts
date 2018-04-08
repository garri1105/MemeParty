import {Player} from "../player/player";
import {Submission} from "../submission/submission";

export interface Room {
  id: string;
  users: Player[];
  submissions: Submission[];
}
