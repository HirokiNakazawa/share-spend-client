import { useRecoilValue, useSetRecoilState } from "recoil";
import { authNameState, authPasswordState } from "../recoil/atom/authState";
import {
  isLoginState,
  isRegisterState,
  modalErrorMsgState,
  modalState,
} from "../recoil/atom/modalState";
import { userState } from "../recoil/atom/userState";
import { PostAuthResponse } from "@/types";
import { typeListState } from "../recoil/atom/typeState";
import { monthlyCostByTypeState } from "../recoil/atom/monthlyState";
import { useApi } from "./useApi";
import { useUpdate } from "./useUpdate";

const useAuthentication = () => {
  const authName = useRecoilValue(authNameState);
  const authPassword = useRecoilValue(authPasswordState);
  const setModal = useSetRecoilState(modalState);
  const setModalErrorMsg = useSetRecoilState(modalErrorMsgState);
  const setIsRegister = useSetRecoilState(isRegisterState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);

  const api = useApi();
  const update = useUpdate();

  const register = async () => {
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

  const login = async () => {
    const data = { name: authName, password: authPassword };
    try {
      const response = await api.postLogin(data);
      console.log(response);
      await handleAuthentication(response);
    } catch (error) {
      console.log(error);
      setModalErrorMsg("ログインに失敗しました");
    }
  };

  const handleAuthentication = async (response: PostAuthResponse) => {
    setUserInfomation(response);
    closeAndResetModal();
    resetFlag();

    await fetchData();
  };

  const setUserInfomation = (response: PostAuthResponse) => {
    setUser({
      id: response.id,
      name: response.name,
      isLoggedIn: true,
    });
  };

  const closeAndResetModal = () => {
    setModal({ isOpen: false, title: "", buttonText: "" });
  };

  const resetFlag = () => {
    setIsRegister(false);
    setIsLogin(false);
  };

  const fetchData = async () => {
    await update.updateTypes();
    await update.updateMonthlyCostByType();
  };

  return { register, login };
};

export { useAuthentication };
