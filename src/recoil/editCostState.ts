import { atom } from "recoil";

export const editCostIdState = atom<number>({
  key: "editCostId",
  default: 0,
});

export const editCostNameState = atom<string>({
  key: "editCostName",
  default: "",
});

export const editCostState = atom<string>({
  key: "editCost",
  default: "",
});

export const editCostIsHalfState = atom<boolean>({
  key: "editCostIsHalf",
  default: false,
});

export const editCostIsFullState = atom<boolean>({
  key: "editCostIsFull",
  default: false,
});
