import { atom } from "recoil";
import { SelectDateState } from "@/types";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

export const selectDateState = atom<SelectDateState>({
  key: "selectDate",
  default: { year: currentYear, month: currentMonth },
});

export const limitDateState = atom<Date | null>({
  key: "limitDate",
  default: null,
});

export const editLimitDateState = atom<Date | null>({
  key: "editLimitDate",
  default: null,
});
