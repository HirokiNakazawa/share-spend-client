"use client";

import { FC } from "react";

import { ResetFunctions } from "@/types";
import { useReset } from "@/hooks/useReset";
import ModalButton from "@/features/Modal/components/ModalButton";

/**
 * モーダルのクローズボタンコンテナコンポーネントです。
 */
const ModalCloseContainer: FC = () => {
  const reset: ResetFunctions = useReset();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @returns {void}
   */
  const handleClose = (): void => {
    reset.resetModalParams();
    reset.resetAuthenticationParams();
  };

  return <ModalButton text="閉じる" handleClick={handleClose} />;
};

export default ModalCloseContainer;
