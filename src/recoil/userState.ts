import { atom } from "recoil";
import { UserState } from "@/types";

const userState = atom<UserState>({
  key: "userState",
  default: { id: null, name: "", isLoggedIn: false },
});

export { userState };
