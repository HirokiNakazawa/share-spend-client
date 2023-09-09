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
  editSelectTypeState,
} from "@/recoil";
import {
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
} from "@/recoil/editCostState";

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

  const setEditCostId = useSetRecoilState(editCostIdState);
  const setEditSelectType = useSetRecoilState(editSelectTypeState);
  const setEditCostName = useSetRecoilState(editCostNameState);
  const setEditCost = useSetRecoilState(editCostState);
  const setEditCostIsHalf = useSetRecoilState(editCostIsHalfState);
  const setEditCostIsFull = useSetRecoilState(editCostIsFullState);

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

  const resetCostUpdateParams = () => {
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
