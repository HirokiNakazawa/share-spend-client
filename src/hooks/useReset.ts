import { useSetRecoilState } from "recoil";

import { ModalState } from "@/types";
import { ResetFunctions } from "./useResetTypes";
import {
  isLoginState,
  isRegisterState,
  modalErrorMsgState,
  modalState,
  authNameState,
  authPasswordState,
  registerTypeState,
  selectTypeState,
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
  isEditCostState,
  editSelectTypeState,
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
  limitDateState,
} from "@/recoil";

/**
 * 状態の初期化に関するカスタムフックです。
 *
 * @returns {ResetFunctions} 状態の初期化関連の関数を含むオブジェクト
 */
const useReset = (): ResetFunctions => {
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);

  const setAuthName = useSetRecoilState<string>(authNameState);
  const setAuthPassword = useSetRecoilState<string>(authPasswordState);
  const setIsRegister = useSetRecoilState<boolean>(isRegisterState);
  const setIsLogin = useSetRecoilState<boolean>(isLoginState);
  const setIsEditCost = useSetRecoilState<boolean>(isEditCostState);

  const setType = useSetRecoilState<string>(registerTypeState);

  const setSelectType = useSetRecoilState<string>(selectTypeState);
  const setCostName = useSetRecoilState<string>(costNameState);
  const setCost = useSetRecoilState<string>(costState);
  const setCostIsHalf = useSetRecoilState<boolean>(costIsHalfState);
  const setCostIsFull = useSetRecoilState<boolean>(costIsFullState);

  const setEditCostId = useSetRecoilState<number>(editCostIdState);
  const setEditSelectType = useSetRecoilState<string>(editSelectTypeState);
  const setEditCostName = useSetRecoilState<string>(editCostNameState);
  const setEditCost = useSetRecoilState<string>(editCostState);
  const setEditCostIsHalf = useSetRecoilState<boolean>(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState<boolean>(editCostIsFullState);

  const setLimitDate = useSetRecoilState<Date | null>(limitDateState);

  /**
   * モーダルの状態を初期化する関数
   *
   * @returns {void}
   */
  const resetModalParams = (): void => {
    setModal({ isOpen: false, title: "", buttonText: "", width: 0 });
    setModalErrorMsg("");
    setIsRegister(false);
    setIsLogin(false);
    setIsEditCost(false);
  };

  /**
   * 認証情報の状態を初期化する関数
   *
   * @returns {void}
   */
  const resetAuthenticationParams = (): void => {
    setAuthName("");
    setAuthPassword("");
  };

  /**
   * 種別登録に関する状態を初期化する関数
   *
   * @returns {void}
   */
  const resetTypeRegistrationParams = (): void => {
    setType("");
  };

  /**
   * 支出登録に関する状態を初期化する関数
   *
   * @returns {void}
   */
  const resetCostRegistrationParams = (): void => {
    setSelectType("");
    setCostName("");
    setCost("");
    setCostIsHalf(false);
    setCostIsFull(false);
  };

  /**
   * 支出編集に関する状態を初期化する関数
   *
   * @returns {void}
   */
  const resetCostUpdateParams = (): void => {
    resetModalParams();
    setEditCostId(0);
    setEditSelectType("");
    setEditCostName("");
    setEditCost("");
    setEditCostIsHalf(false);
    setEditCostIsFull(false);
  };

  /**
   * 固定費登録に関する状態を初期化する関数
   *
   * @returns {void}
   */
  const resetFixedCostParams = (): void => {
    setLimitDate(null);
  };

  return {
    resetModalParams,
    resetAuthenticationParams,
    resetTypeRegistrationParams,
    resetCostRegistrationParams,
    resetCostUpdateParams,
    resetFixedCostParams,
  };
};

export { useReset };
