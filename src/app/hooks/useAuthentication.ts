import { useRecoilValue, useSetRecoilState } from "recoil";
import { authNameState, authPasswordState } from "../recoil/atom/authState";
import {
  isLoginState,
  isRegisterState,
  modalErrorMsgState,
  modalState,
} from "../recoil/atom/modalState";
import { userState } from "../recoil/atom/userState";
import { useApi } from "./useApi";
import { PostAuthResponse } from "@/types";
import { typeListState } from "../recoil/atom/typeState";
import { useTypeManagement } from "./useTypeManagement";

const useAuthentication = () => {
  const authName = useRecoilValue(authNameState);
  const authPassword = useRecoilValue(authPasswordState);
  const setModal = useSetRecoilState(modalState);
  const setModalErrorMsg = useSetRecoilState(modalErrorMsgState);
  const setIsRegister = useSetRecoilState(isRegisterState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);
  const setTypeList = useSetRecoilState(typeListState);

  const api = useApi();

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
    setUser({
      id: response.id,
      name: response.name,
      isLoggedIn: true,
    });
    setModal({ isOpen: false, title: "", buttonText: "" });
    setIsRegister(false);
    setIsLogin(false);

    const typeList = await api.getTypes();
    console.log(typeList);
    setTypeList(typeList);
  };

  return { register, login };
};

export { useAuthentication };
