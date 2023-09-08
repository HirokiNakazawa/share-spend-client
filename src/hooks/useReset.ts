import { useSetRecoilState } from "recoil";
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
} from "@/recoil";

const useReset = () => {
  const setModal = useSetRecoilState(modalState);
  const setModalErrorMsg = useSetRecoilState(modalErrorMsgState);

  const setAuthName = useSetRecoilState(authNameState);
  const setAuthPassword = useSetRecoilState(authPasswordState);
  const setIsRegister = useSetRecoilState(isRegisterState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const setIsEditCost = useSetRecoilState(isEditCostState);

  const setType = useSetRecoilState(registerTypeState);

  const setSelectType = useSetRecoilState(selectTypeState);
  const setCostName = useSetRecoilState(costNameState);
  const setCost = useSetRecoilState(costState);
  const setCostIsHalf = useSetRecoilState(costIsHalfState);
  const setCostIsFull = useSetRecoilState(costIsFullState);

  const resetModalParams = () => {
    setModal({ isOpen: false, title: "", buttonText: "", width: 0 });
    setModalErrorMsg("");
    setIsRegister(false);
    setIsLogin(false);
    setIsEditCost(false);
  };

  const resetAuthenticationParams = () => {
    setAuthName("");
    setAuthPassword("");
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
