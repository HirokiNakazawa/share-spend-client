import { atom } from "recoil";
import { ModalState } from "../type";

const modalState = atom<ModalState>({
  key: "modalState",
  default: { isOpen: false, title: "", buttonText: "" },
});

const isRegisterModalState = atom<boolean>({
  key: "isRegisterModal",
  default: false,
});

const isLoginModalState = atom<boolean>({
  key: "isLoginModal",
  default: false,
});

export { modalState, isRegisterModalState, isLoginModalState };
