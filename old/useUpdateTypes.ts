import { SelectDateState } from "@/types";

/**
 * 状態の更新に関するカスタムフックの型定義
 */
export type UpdateFunctions = {
  updateTypeList: () => Promise<void>;
  updateUserCostList: (id: number, selectDate: SelectDateState) => Promise<void>;
  updateUserFixedCostList: (id: number) => Promise<void>;
  updateMonthlyCostByType: (selectDate: SelectDateState) => Promise<void>;
  updateMonthlyClaim: (selectDate: SelectDateState) => Promise<void>;
};
