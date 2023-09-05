import { MonthlyCostByTypeState } from "@/types";
import { atom } from "recoil";

export const monthlyCostByTypeState = atom<MonthlyCostByTypeState[]>({
  key: "monthlyCostByType",
  default: [],
});
