import { atom } from "recoil";

type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

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
