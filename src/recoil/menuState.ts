import { atom } from "recoil";

export const isMenuOpenState = atom<boolean>({
  key: "isMenuOpen",
  default: false,
});
