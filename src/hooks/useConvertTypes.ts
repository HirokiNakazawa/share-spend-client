import { ClaimState, GetMonthlyBillingAmountResponse } from "@/types";

/**
 * コンバートカスタムフックの型定義
 */
export type ConvertFunctions = {
  /**
   * @param {GetMonthlyBillingAmountResponse} response
   */
  convertToClaimState: (response: GetMonthlyBillingAmountResponse) => ClaimState;
};
