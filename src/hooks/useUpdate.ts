import { useSetRecoilState } from "recoil";
import { typeListState } from "@/recoil/typeState";
import { monthlyCostByTypeState } from "@/recoil/monthlyState";
import { useApi } from "@/hooks/useApi";

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
