import { useUtils } from "@/hooks/useUtils";
import { SelectDateState } from "@/types";
import { atom } from "recoil";

const utils = useUtils();

export const selectDateState = atom<SelectDateState>({
  key: "selectDate",
  default: { year: utils.getFullYear(), month: utils.getMonth() },
});
