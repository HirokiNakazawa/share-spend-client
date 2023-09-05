"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { modalErrorMsgState, modalState } from "@/recoil";
import ModalHeader from "@/features/Modal/components/ModalHeader";

const ModalHeaderContainer: FC = () => {
  const modal = useRecoilValue(modalState);
  const modalErrorMsg = useRecoilValue(modalErrorMsgState);

  return <ModalHeader title={modal.title} errorMsg={modalErrorMsg} />;
};

export default ModalHeaderContainer;
