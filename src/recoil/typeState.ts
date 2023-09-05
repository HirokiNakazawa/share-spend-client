import { atom } from "recoil";
import { TypeState } from "@/types";

export const typeListState = atom<TypeState[]>({
  key: "typeList",
  default: [],
});

export const registerTypeState = atom<string>({
  key: "registerType",
  default: "",
});

export const selectTypeState = atom<string>({
  key: "selectType",
  default: "",
});
