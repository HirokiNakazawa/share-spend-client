import { PostAuthResponse } from "@/types";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  authNameState,
  authPasswordState,
  modalErrorMsgState,
  modalState,
  selectDateState,
  userState,
} from "@/recoil";
import { authApi } from "../api/authApi";
import { useUpdate } from "@/hooks/useUpdate";
import { useReset } from "@/hooks/useReset";

const useAuthentication = () => {
  const authName = useRecoilValue(authNameState);
  const authPassword = useRecoilValue(authPasswordState);
  const selectDate = useRecoilValue(selectDateState);
  const setModal = useSetRecoilState(modalState);
  const setModalErrorMsg = useSetRecoilState(modalErrorMsgState);
  const [user, setUser] = useRecoilState(userState);

  const api = authApi();
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
    await setUserInfomation(response);
    closeAndResetModal();

    reset.resetModalParams();
    reset.resetAuthenticationParams();

    await fetchData(response.id);
  };

  const setUserInfomation = async (response: PostAuthResponse) => {
    setUser({
      id: response.id,
      name: response.name,
      isLoggedIn: true,
    });
  };

  const closeAndResetModal = () => {
    setModal({ isOpen: false, title: "", buttonText: "" });
  };

  const fetchData = async (id: number) => {
    await update.updateTypeList();
    await update.updateUserCostList(id, selectDate);
    await update.updateMonthlyCostByType(selectDate);
  };

  return { register, login };
};

export { useAuthentication };
