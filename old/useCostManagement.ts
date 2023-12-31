import { useRecoilValue } from "recoil";
import { useApi } from "../src/hooks/useApi";
import { userState } from "../src/recoil/userState";
import {
  costIsFullState,
  costIsHalfState,
  costNameState,
  costState,
  costTypeState,
} from "../src/recoil/costState";
import { typeListState } from "../src/recoil/typeState";

const useCostManagement = () => {
  const typeList = useRecoilValue(typeListState);

  const user = useRecoilValue(userState);
  const costType = useRecoilValue(costTypeState);
  const costName = useRecoilValue(costNameState);
  const cost = useRecoilValue(costState);
  const costIsHalf = useRecoilValue(costIsHalfState);
  const costIsFull = useRecoilValue(costIsFullState);

  const api = useApi();

  const createCost = async () => {
    const targetType = typeList.find((item) => item.type === costType);
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

export { useCostManagement };
