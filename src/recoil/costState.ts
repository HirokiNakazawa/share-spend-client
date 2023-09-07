import { atom } from "recoil";

export const costNameState = atom<string>({
  key: "costName",
  default: "",
});

export const costState = atom<string>({
  key: "cost",
  default: "",
});

export const costIsHalfState = atom<boolean>({
  key: "costIsHalf",
  default: false,
});

export const costIsFullState = atom<boolean>({
  key: "costIsFull",
  default: false,
});
