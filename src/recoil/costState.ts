import { atom } from "recoil";

export const costState = atom<string>({
  key: "cost",
  default: "",
});

export const costTypeState = atom<string>({
  key: "costType",
  default: "",
});

export const costNameState = atom<string>({
  key: "costName",
  default: "",
});

export const costIsFullState = atom<boolean>({
  key: "costIsFull",
  default: false,
});

export const costIsHalfState = atom<boolean>({
  key: "costIsHalf",
  default: false,
});
