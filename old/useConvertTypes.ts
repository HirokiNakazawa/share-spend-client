import { ClaimState, GetMonthlyBillingAmountResponse } from "@/types";

/**
 * コンバートカスタムフックの型定義
 */
export declare type ConvertFunctions = {
  convertToClaimState: (response: GetMonthlyBillingAmountResponse) => ClaimState;
};
