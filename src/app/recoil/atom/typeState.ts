import { atom } from "recoil";
import { TypeState } from "@/types";

const typeListState = atom<TypeState[]>({
  key: "typeList",
  default: [],
});

const registerTypeState = atom<string>({
  key: "registerType",
  default: "",
});

export { typeListState, registerTypeState };
