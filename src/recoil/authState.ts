import { atom } from "recoil";

const authNameState = atom<string>({
  key: "authName",
  default: "",
});

const authPasswordState = atom<string>({
  key: "authPassword",
  default: "",
});

export { authNameState, authPasswordState };
