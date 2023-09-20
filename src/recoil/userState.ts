import { atom } from "recoil";
import { CostState, UserState } from "@/types";

export const userState = atom<UserState>({
  key: "user",
  default: { id: 0, name: "", isLoggedIn: false },
});

export const userCostListState = atom<CostState[]>({
  key: "userCostList",
  default: [],
});

export const userFixedCostListState = atom<CostState[]>({
  key: "userFixedCostList",
  default: [],
});
