import { atom } from "recoil";
import { ModalState } from "../type";

export const modalState = atom<ModalState>({
  key: "modalState",
  default: { isOpen: false, isRegister: false },
});
