import { atom } from "recoil";
import { ModalState } from "@/types";

const modalState = atom<ModalState>({
  key: "modal",
  default: { isOpen: false, title: "", buttonText: "" },
});

const isRegisterState = atom<boolean>({
  key: "isRegisterModal",
  default: false,
});

const isLoginState = atom<boolean>({
  key: "isLoginModal",
  default: false,
});

const modalErrorMsgState = atom<string>({
  key: "modalErrorMsg",
  default: "",
});

export { modalState, isRegisterState, isLoginState, modalErrorMsgState };
