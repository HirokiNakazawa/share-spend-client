import { atom } from "recoil";

import { ModalState } from "@/types";

export const modalState = atom<ModalState>({
  key: "modal",
  default: { isOpen: false, title: "", buttonText: "", width: 0 },
});

export const isRegisterState = atom<boolean>({
  key: "isRegisterModal",
  default: false,
});

export const isLoginState = atom<boolean>({
  key: "isLoginModal",
  default: false,
});

export const isEditCostState = atom<boolean>({
  key: "isEditCost",
  default: false,
});

export const isEditFixedCostState = atom<boolean>({
  key: "isEditFixedCost",
  default: false,
});

export const modalErrorMsgState = atom<string>({
  key: "modalErrorMsg",
  default: "",
});
