import { ClaimState, GetMonthlyBillingAmountResponse, ConvertFunctions } from "@/types";

/**
 * APIレスポンスをコンバートし、Recoilアトムの型に変換するカスタムフックです。
 *
 * @returns {ConvertFunctions} コンバート関連の関数を含むオブジェクト
 */
const useConvert = (): ConvertFunctions => {
  const convertToClaimState = (response: GetMonthlyBillingAmountResponse): ClaimState => {
    if ("message" in response) {
      return {
        sender: "",
        receiver: "",
        claim: 0,
      };
    } else {
      return {
        sender: response.sender,
        receiver: response.receiver,
        claim: response.claim,
      };
    }
  };

  return { convertToClaimState };
};

export { useConvert };
