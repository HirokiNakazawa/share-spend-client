"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { claimState } from "@/recoil";
import AriaClaim from "@/features/Dashboard/LeftTopAria/components/AriaClaim";

const AriaClaimContainer: FC = () => {
  const claim = useRecoilValue(claimState);

  return (
    <AriaClaim
      sender={claim.sender}
      receiver={claim.receiver}
      claim={claim.claim}
    />
  );
};

export default AriaClaimContainer;
