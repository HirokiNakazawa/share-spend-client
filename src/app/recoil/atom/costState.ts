import { atom } from "recoil";

const costState = atom<string>({
  key: "cost",
  default: "",
});

const costTypeState = atom<string>({
  key: "costType",
  default: "",
});

const costNameState = atom<string>({
  key: "costName",
  default: "",
});

const costIsFullState = atom<boolean>({
  key: "costIsFull",
  default: false,
});

const costIsHalfState = atom<boolean>({
  key: "costIsHalf",
  default: false,
});

export {
  costState,
  costTypeState,
  costNameState,
  costIsFullState,
  costIsHalfState,
};
