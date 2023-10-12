"use client";

import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "@/types";
import { AuthenticationFunctions } from "../../../../old/useAuthenticationTypes";
import { useAuthentication } from "@/features/Authentication/hooks/useAuthentication";
import { modalState } from "@/recoil";
import ModalButton from "@/features/Modal/components/ModalButton";

/**
 * モーダルのユーザー登録ボタンコンテナコンポーネントです。
 */
const ModalRegisterContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  const authentication: AuthenticationFunctions = useAuthentication();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @returns {void}
   */
  const handleRegister = () => {
    console.log("新規登録ボタンがクリックされました");
    authentication.register();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleRegister} />;
};

export default ModalRegisterContainer;
