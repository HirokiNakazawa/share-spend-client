import { useUtils } from "@/hooks/useUtils";
import { SelectDateState } from "@/types";
import { atom } from "recoil";

const utils = useUtils();

const selectDateState = atom<SelectDateState>({
  key: "selectDate",
  default: { year: utils.getFullYear(), month: utils.getMonth() },
});

export { selectDateState };
