import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState, UpdateFunctions, UseFixedCostFunctions, UserState } from "@/types";
import { useUpdate } from "@/hooks/useUpdate";
import { modalState, userState } from "@/recoil";
import { useFixedCost } from "@/features/FixedCost/hooks/useFixedCost";
import ModalButton from "../components/ModalButton";

const ModalEditFixedCostContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const user = useRecoilValue<UserState>(userState);

  const fixedCostService: UseFixedCostFunctions = useFixedCost();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * クリック時に状態を処理するコールバック関数
   *
   * @returns {Promise<void>}
   */
  const handleUpdate = async (): Promise<void> => {
    console.log("固定更新ボタンがクリックされました");
    await fixedCostService.updateFixedCost();
    await updateService.updateUserFixedCostList(user.id);
  };

  return <ModalButton text={modal.buttonText} handleClick={handleUpdate} />;
};

export default ModalEditFixedCostContainer;
