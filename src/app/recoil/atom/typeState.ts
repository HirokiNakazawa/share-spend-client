import { atom } from "recoil";
import { Type } from "@/types";

const typeListState = atom<Type[]>({
  key: "typeList",
  default: [],
});

const registerTypeState = atom<string>({
  key: "registerType",
  default: "",
});

const selectTypeState = atom<string>({
  key: "selectType",
  default: "",
});

export { typeListState, registerTypeState, selectTypeState };
