import { useSetRecoilState } from "recoil";
import { typeListState } from "../recoil/atom/typeState";
import { useApi } from "./useApi";
import { monthlyCostByTypeState } from "../recoil/atom/monthlyState";

const useUpdate = () => {
  const setTypeList = useSetRecoilState(typeListState);
  const setMonthlyCostByType = useSetRecoilState(monthlyCostByTypeState);

  const api = useApi();

  const updateTypes = async () => {
    const typeList = await api.getTypes();
    console.log(typeList);
    setTypeList(typeList);
  };

  const updateMonthlyCostByType = async () => {
    const monthlyCostByType = await api.getMonthlyCostByType();
    console.log(monthlyCostByType);
    setMonthlyCostByType(monthlyCostByType);
  };

  return { updateTypes, updateMonthlyCostByType };
};

export { useUpdate };
