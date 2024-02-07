import { SelectDateState } from "@/types";
import { UtilsFunctions, useUtils } from "@/hooks/useUtils";

const utils: UtilsFunctions = useUtils();

const startYear = 2023;
const startMonth = 8;
const todayYear = utils.getFullYear();
const todayMonth = utils.getMonth();

const dateList: SelectDateState[] = [];

for (let i = startMonth; i < 13; i++) {
  dateList.push({ year: startYear, month: i });
}

for (let i = startYear + 1; i <= todayYear; i++) {
  for (let j = 1; j < 13; j++) {
    if (i == todayYear && j > todayMonth) {
      continue;
    }
    dateList.push({ year: i, month: j });
  }
}

export const pastDateList = dateList.reverse();
