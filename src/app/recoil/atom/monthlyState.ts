import { monthlyCostByType } from "@/types";
import { atom } from "recoil";

const monthlyCostByTypeState = atom<monthlyCostByType[]>({
  key: "monthlyCostByType",
  default: [],
});

export { monthlyCostByTypeState };
