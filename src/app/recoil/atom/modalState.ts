import { atom } from "recoil";
import { ModalState } from "../type";

const modalState = atom<ModalState>({
  key: "modalState",
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
  key: "modalErrorMsgState",
  default: "",
});

export { modalState, isRegisterState, isLoginState, modalErrorMsgState };
