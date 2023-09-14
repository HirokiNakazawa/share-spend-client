"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ClaimState } from "@/types";
import { claimState } from "@/recoil";
import AriaClaim from "@/features/Dashboard/LeftTopAria/components/AriaClaim";

/**
 * 請求金額表示領域のコンテナコンポーネントです。
 */
const AriaClaimContainer: FC = () => {
  const claim = useRecoilValue<ClaimState>(claimState);

  return <AriaClaim sender={claim.sender} receiver={claim.receiver} claim={claim.claim} />;
};

export default AriaClaimContainer;
