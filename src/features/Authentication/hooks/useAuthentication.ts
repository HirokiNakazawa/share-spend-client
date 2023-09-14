import { useRecoilValue, useSetRecoilState } from "recoil";

import { ModalState, PostAuthResponse, SelectDateState, UserState } from "@/types";
import { AuthenticationFunctions } from "./useAuthenticationTypes";
import { authApi } from "@/features/Authentication/api/authApi";
import { useUpdate } from "@/hooks/useUpdate";
import { useReset } from "@/hooks/useReset";
import { authNameState, authPasswordState, modalErrorMsgState, modalState, selectDateState, userState } from "@/recoil";

/**
 * ユーザー認証に関するカスタムフックです。
 *
 * @returns {AuthenticationFunctions} ユーザー認証関連の関数を含むオブジェクト
 */
const useAuthentication = (): AuthenticationFunctions => {
  const authName = useRecoilValue<string>(authNameState);
  const authPassword = useRecoilValue<string>(authPasswordState);
  const selectDate = useRecoilValue<SelectDateState>(selectDateState);
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);
  const setUser = useSetRecoilState<UserState>(userState);

  const api = authApi();
  const update = useUpdate();
  const reset = useReset();

  /**
   * ユーザー登録を行う関数
   *
   * @returns {Promise<void>}
   */
  const register = async (): Promise<void> => {
    const data = { name: authName, password: authPassword };
    try {
      const response = await api.postRegister(data);
      console.log(response);
      await handleAuthentication(response);
    } catch (error) {
      console.log(error);
      setModalErrorMsg("ユーザー登録に失敗しました");
    }
  };

  /**
   * ユーザーログインを行う関数
   *
   * @returns {Promise<void>}
   */
  const login = async (): Promise<void> => {
    const data = { name: authName, password: authPassword };
    try {
      const response = await api.postLogin(data);
      console.log(response);
      handleAuthentication(response);
      await fetchData(response);
    } catch (error) {
      console.log(error);
      setModalErrorMsg("ログインに失敗しました");
    }
  };

  /**
   * ユーザー登録・ログインに成功した場合に実行される関数
   *
   * @param {PostAuthResponse} response - ユーザー情報
   * @returns {Promise<void>}
   */
  const handleAuthentication = async (response: PostAuthResponse): Promise<void> => {
    setUserInfomation(response);
    closeAndResetModal();

    reset.resetModalParams();
    reset.resetAuthenticationParams();
  };

  /**
   * ユーザー情報をRecoilアトムに格納する関数
   *
   * @param {PostAuthResponse} response - ユーザー情報
   * @returns {void}
   */
  const setUserInfomation = (response: PostAuthResponse): void => {
    setUser({
      id: response.id,
      name: response.name,
      isLoggedIn: true,
    });
  };

  /**
   * モーダルの状態を初期化する関数
   *
   * @returns {void}
   */
  const closeAndResetModal = (): void => {
    setModal({ isOpen: false, title: "", buttonText: "", width: 0 });
  };

  /**
   * ログインに成功後、アプリで使用する情報をRecoilアトムに格納する関数
   *
   * @param {PostAuthResponse} response - ユーザー情報
   * @returns {Promise<void>}
   */
  const fetchData = async (response: PostAuthResponse): Promise<void> => {
    await update.updateTypeList();
    await update.updateUserCostList(response.id, selectDate);
    await update.updateMonthlyCostByType(selectDate);
    await update.updateMonthlyClaim(selectDate);
  };

  return { register, login };
};

export { useAuthentication };
