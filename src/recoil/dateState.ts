import { atom } from "recoil";
import { SelectDateState } from "@/types";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

export const selectDateState = atom<SelectDateState>({
  key: "selectDate",
  default: { year: currentYear, month: currentMonth },
});
