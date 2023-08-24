import { atom } from "recoil";

const typeState = atom<string>({
  key: "type",
  default: "",
});

export { typeState };
