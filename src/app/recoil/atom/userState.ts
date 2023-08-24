import { atom } from "recoil";

type UserState = {
  id: number | null;
  name: string;
  isLoggedIn: boolean;
};

const userState = atom<UserState>({
  key: "userState",
  default: { id: null, name: "", isLoggedIn: false },
});

export { userState };
