import { FC } from "react";
import { REGISTER_BUTTON } from "@/config/config";
import { useSetRecoilState } from "recoil";
import { isRegisterState, modalState } from "@/recoil";
import AuthenticationButton from "../components/AuthenticationButton";

const RegistrationContainer: FC = () => {
  const setModal = useSetRecoilState(modalState);
  const setIsRegister = useSetRecoilState(isRegisterState);

  const handleSetState = () => {
    setModal({
      isOpen: true,
      title: REGISTER_BUTTON,
      buttonText: REGISTER_BUTTON,
      width: 500,
    });
    setIsRegister(true);
  };

  return (
    <AuthenticationButton text={REGISTER_BUTTON} handleClick={handleSetState} />
  );
};

export default RegistrationContainer;
