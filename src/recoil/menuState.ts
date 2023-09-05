import { atom } from "recoil";

const isMenuOpenState = atom<boolean>({
  key: "isMenuOpen",
  default: false,
});

export { isMenuOpenState };
