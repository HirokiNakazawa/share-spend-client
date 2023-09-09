import { editSelectTypeState, typeListState, userState } from "@/recoil";
import {
  editCostIdState,
  editCostIsFullState,
  editCostIsHalfState,
  editCostNameState,
  editCostState,
} from "@/recoil/editCostState";
import { useRecoilValue } from "recoil";
import { updateCostApi } from "../api/updateCostApi";
import { useReset } from "@/hooks/useReset";

const useUpdateCost = () => {
  const typeList = useRecoilValue(typeListState);
  const user = useRecoilValue(userState);

  const editCostId = useRecoilValue(editCostIdState);
  const editSelectType = useRecoilValue(editSelectTypeState);
  const editCostName = useRecoilValue(editCostNameState);
  const editCost = useRecoilValue(editCostState);
  const editCostIsHalf = useRecoilValue(editCostIsHalfState);
  const editCostIsFull = useRecoilValue(editCostIsFullState);

  const api = updateCostApi();
  const reset = useReset();

  const updateCost = async () => {
    const typeId = Object.keys(typeList).find(
      (key) => typeList[key] === editSelectType
    );
    const data = {
      user_id: user.id,
      type_id: parseInt(typeId!),
      name: editCostName,
      cost: parseInt(editCost),
      is_half_billing: editCostIsHalf,
      is_full_billing: editCostIsFull,
    };
    try {
      const response = await api.putUpdateCost(data, editCostId);
      console.log(response);
      reset.resetCostUpdateParams();
    } catch (error) {
      console.log(error);
    }
  };

  return { updateCost };
};

export { useUpdateCost };
