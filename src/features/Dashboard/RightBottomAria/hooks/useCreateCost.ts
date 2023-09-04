import {
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
} from "@/recoil/costState";
import { selectTypeState, typeListState } from "@/recoil/typeState";
import { userState } from "@/recoil/userState";
import { useRecoilValue } from "recoil";
import { createCostApi } from "../api/createCostApi";

const useCreateCost = () => {
  const typeList = useRecoilValue(typeListState);
  const user = useRecoilValue(userState);

  const selectType = useRecoilValue(selectTypeState);
  const costName = useRecoilValue(costNameState);
  const cost = useRecoilValue(costState);
  const costIsHalf = useRecoilValue(costIsHalfState);
  const costIsFull = useRecoilValue(costIsFullState);

  const api = createCostApi();

  const createCost = async () => {
    const targetType = typeList.find((item) => item.type === selectType);
    const data = {
      user_id: user.id,
      type_id: targetType?.id,
      name: costName,
      cost: parseInt(cost),
      is_half_billing: costIsHalf,
      is_full_billing: costIsFull,
    };
    try {
      const response = await api.postCreateCost(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { createCost };
};

export { useCreateCost };