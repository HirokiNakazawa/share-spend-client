import { atom } from "recoil";
import { UserState } from "@/types";

export const userState = atom<UserState>({
  key: "user",
  default: { id: null, name: "", isLoggedIn: false },
});
