export interface Profile {
  email: String;
  discordUserId?: String;
  uid: String;
  linkToken?: String;
  birth?: Date;
  school?: String;
  firstName?: String;
  lastName?: String;
  role: ["DEFAULT", "ADMIN"];
}

import { User as U } from "firebase/auth";
export interface User extends U {
  token: string;
}
