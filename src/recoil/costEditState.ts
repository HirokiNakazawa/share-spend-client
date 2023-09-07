import { atom } from "recoil";

export const editCostNameState = atom<string>({
  key: "editCostName",
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
