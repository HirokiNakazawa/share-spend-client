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
} from "@/recoil";

/**
 * 状態の初期化に関するカスタムフックです。
 *
 * @returns {ResetFunctions} 状態の初期化関連の関数を含むオブジェクト
 */
const useReset = (): ResetFunctions => {
  const setModal: (value: ModalState) => void = useSetRecoilState<ModalState>(modalState);
  const setModalErrorMsg: (value: string) => void = useSetRecoilState<string>(modalErrorMsgState);

  const setAuthName: (value: string) => void = useSetRecoilState<string>(authNameState);
  const setAuthPassword: (value: string) => void = useSetRecoilState<string>(authPasswordState);
  const setIsRegister: (value: boolean) => void = useSetRecoilState<boolean>(isRegisterState);
  const setIsLogin: (value: boolean) => void = useSetRecoilState<boolean>(isLoginState);
  const setIsEditCost: (value: boolean) => void = useSetRecoilState<boolean>(isEditCostState);

  const setType: (value: string) => void = useSetRecoilState<string>(registerTypeState);

  const setSelectType: (value: string) => void = useSetRecoilState<string>(selectTypeState);
  const setCostName: (value: string) => void = useSetRecoilState<string>(costNameState);
  const setCost: (value: string) => void = useSetRecoilState<string>(costState);
  const setCostIsHalf: (value: boolean) => void = useSetRecoilState<boolean>(costIsHalfState);
  const setCostIsFull: (value: boolean) => void = useSetRecoilState<boolean>(costIsFullState);

  const setEditCostId: (value: number) => void = useSetRecoilState<number>(editCostIdState);
  const setEditSelectType: (value: string) => void = useSetRecoilState<string>(editSelectTypeState);
  const setEditCostName: (value: string) => void = useSetRecoilState<string>(editCostNameState);
  const setEditCost: (value: string) => void = useSetRecoilState<string>(editCostState);
  const setEditCostIsHalf: (value: boolean) => void = useSetRecoilState<boolean>(editCostIsHalfState);
  const setEditCostIsFull: (value: boolean) => void = useSetRecoilState<boolean>(editCostIsFullState);

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

  return {
    resetModalParams,
    resetAuthenticationParams,
    resetTypeRegistrationParams,
    resetCostRegistrationParams,
    resetCostUpdateParams,
  };
};

export { useReset };
