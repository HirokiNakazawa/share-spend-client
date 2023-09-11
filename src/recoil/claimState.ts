import { ClaimState } from "@/types";
import { atom } from "recoil";

export const claimState = atom<ClaimState>({
  key: "claim",
  default: { sender: "", receiver: "", claim: 0 },
});
