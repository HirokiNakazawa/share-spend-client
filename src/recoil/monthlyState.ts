import { atom } from "recoil";

import { MonthlyCostByTypeState } from "@/types";

export const monthlyCostByTypeState = atom<MonthlyCostByTypeState[]>({
  key: "monthlyCostByType",
  default: [],
});
