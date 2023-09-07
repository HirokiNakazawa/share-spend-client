import { useApi } from "@/hooks/useApi";
import { useSetRecoilState } from "recoil";
import {
  typeListState,
  monthlyCostByTypeState,
  userCostListState,
} from "@/recoil";
import { SelectDateState } from "@/types";

const useUpdate = () => {
  const setTypeList = useSetRecoilState(typeListState);
  const setUserCostList = useSetRecoilState(userCostListState);
  const setMonthlyCostByType = useSetRecoilState(monthlyCostByTypeState);

  const api = useApi();

  const updateTypeList = async () => {
    const typeList = await api.getTypeList();
    console.log(typeList);
    setTypeList(typeList);
  };

  const updateUserCostList = async (
    id: number,
    selectDate: SelectDateState
  ) => {
    const userCostList = await api.getUserCostList(id, selectDate);
    console.log(userCostList);
    setUserCostList(userCostList);
  };

  const updateMonthlyCostByType = async (selectDate: SelectDateState) => {
    const monthlyCostByType = await api.getMonthlyCostByType(selectDate);
    console.log(monthlyCostByType);
    setMonthlyCostByType(monthlyCostByType);
  };

  return { updateTypeList, updateUserCostList, updateMonthlyCostByType };
};

export { useUpdate };
