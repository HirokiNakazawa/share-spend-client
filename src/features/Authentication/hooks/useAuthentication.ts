import { useRecoilValue, useSetRecoilState } from "recoil";
import { authNameState, authPasswordState } from "@/recoil/authState";
import { modalErrorMsgState, modalState } from "@/recoil/modalState";
import { userState } from "@/recoil/userState";
import { PostAuthResponse } from "@/types";
import { useApi } from "@/hooks/useApi";
import { useUpdate } from "@/hooks/useUpdate";
import { useReset } from "@/hooks/useReset";

const useAuthentication = () => {
  const authName = useRecoilValue(authNameState);
  const authPassword = useRecoilValue(authPasswordState);
  const setModal = useSetRecoilState(modalState);
  const setModalErrorMsg = useSetRecoilState(modalErrorMsgState);
  const setUser = useSetRecoilState(userState);

  const api = useApi();
  const update = useUpdate();
  const reset = useReset();

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

    reset.resetModalParams();
    reset.resetAuthenticationParams();

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

  const fetchData = async () => {
    await update.updateTypes();
    await update.updateMonthlyCostByType();
  };

  return { register, login };
};

export { useAuthentication };
