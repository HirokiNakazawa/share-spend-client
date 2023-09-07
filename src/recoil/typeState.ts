import { atom } from "recoil";

export const typeListState = atom<{ [key: string]: string }>({
  key: "typeList",
  default: {},
});

export const registerTypeState = atom<string>({
  key: "registerType",
  default: "",
});

export const selectTypeState = atom<string>({
  key: "selectType",
  default: "",
});

export const editSelectTypeState = atom<string>({
  key: "editSelectType",
  default: "",
});
