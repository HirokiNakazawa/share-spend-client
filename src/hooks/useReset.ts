import { useSetRecoilState } from "recoil";
import {
  isLoginState,
  isRegisterState,
  modalErrorMsgState,
  modalState,
} from "@/recoil/modalState";
import { authNameState, authPasswordState } from "@/recoil/authState";
import { registerTypeState, selectTypeState } from "@/recoil/typeState";
import {
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
} from "@/recoil/costState";

const useReset = () => {
  const setModal = useSetRecoilState(modalState);
  const setModalErrorMsg = useSetRecoilState(modalErrorMsgState);

  const setAuthName = useSetRecoilState(authNameState);
  const setAuthPassword = useSetRecoilState(authPasswordState);
  const setIsRegister = useSetRecoilState(isRegisterState);
  const setIsLogin = useSetRecoilState(isLoginState);

  const setType = useSetRecoilState(registerTypeState);

  const setSelectType = useSetRecoilState(selectTypeState);
  const setCostName = useSetRecoilState(costNameState);
  const setCost = useSetRecoilState(costState);
  const setCostIsHalf = useSetRecoilState(costIsHalfState);
  const setCostIsFull = useSetRecoilState(costIsFullState);

  const resetModalParams = () => {
    setModal({ isOpen: false, title: "", buttonText: "" });
    setModalErrorMsg("");
  };

  const resetAuthenticationParams = () => {
    setAuthName("");
    setAuthPassword("");
    setIsRegister(false);
    setIsLogin(false);
  };

  const resetTypeRegistrationParams = () => {
    setType("");
  };

  const resetCostRegistrationParams = () => {
    setSelectType("");
    setCostName("");
    setCost("");
    setCostIsHalf(false);
    setCostIsFull(false);
  };

  return {
    resetModalParams,
    resetAuthenticationParams,
    resetTypeRegistrationParams,
    resetCostRegistrationParams,
  };
};

export { useReset };
