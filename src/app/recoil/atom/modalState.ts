import { atom } from "recoil";
import { ModalState } from "../type";

export const modalState = atom<ModalState>({
  key: "modalState",
  default: { isOpen: false, title: "", buttonText: "" },
});

export const isRegisterModal = atom<boolean>({
  key: "isRegisterModal",
  default: false,
});

export const isLoginModal = atom<boolean>({
  key: "isLoginModal",
  default: false,
});
