import { atom } from "recoil";

import { ClaimState } from "@/types";

export const claimState = atom<ClaimState>({
  key: "claim",
  default: { sender: "", receiver: "", claim: 0 },
});
