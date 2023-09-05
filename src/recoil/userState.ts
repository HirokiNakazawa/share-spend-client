import { atom } from "recoil";
import { UserState } from "@/types";

const userState = atom<UserState>({
  key: "user",
  default: { id: null, name: "", isLoggedIn: false },
});

export { userState };
