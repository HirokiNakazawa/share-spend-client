"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "@/types";
import { AuthenticationFunctions } from "../../../../old/useAuthenticationTypes";
import { useAuthentication } from "@/features/Authentication/hooks/useAuthentication";
import { modalState } from "@/recoil";
import ModalButton from "@/features/Modal/components/ModalButton";

/**
 * モーダルのログインボタンコンテナコンポーネントです。
 */
const ModalLoginContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  const authentication: AuthenticationFunctions = useAuthentication();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @returns {void}
   */
  const handleLogin = (): void => {
    console.log("ログインボタンがクリックされました");
    authentication.login();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleLogin} />;
};

export default ModalLoginContainer;
