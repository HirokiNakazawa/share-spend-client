import { MonthlyCostByTypeState } from "@/types";
import { atom } from "recoil";

const monthlyCostByTypeState = atom<MonthlyCostByTypeState[]>({
  key: "monthlyCostByType",
  default: [],
});

export { monthlyCostByTypeState };
