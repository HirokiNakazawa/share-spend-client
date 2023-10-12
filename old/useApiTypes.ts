import {
  GetMonthlyBillingAmountResponse,
  GetMonthlyCostByTypeResponse,
  GetTypeListResponse,
  GetUserCostListResponse,
  GetUserFixedCostListResponse,
  SelectDateState,
} from "@/types";

/**
 * 汎用API関数の型定義
 */
export declare type ApiFunctions = {
  getTypeList: () => Promise<GetTypeListResponse>;
  getUserCostList: (id: number, selectDate: SelectDateState) => Promise<GetUserCostListResponse[]>;
  getUserFixedCostList: (id: number) => Promise<GetUserFixedCostListResponse[]>;
  getMonthlyCostByType: (selectDate: SelectDateState) => Promise<GetMonthlyCostByTypeResponse[]>;
  getMonthlyBillingAmount: (selectDate: SelectDateState) => Promise<GetMonthlyBillingAmountResponse>;
};
