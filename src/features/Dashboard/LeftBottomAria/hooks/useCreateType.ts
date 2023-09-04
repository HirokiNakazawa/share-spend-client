import { registerTypeState } from "@/recoil/typeState";
import { useRecoilValue } from "recoil";
import { createTypeApi } from "@/features/Dashboard/LeftBottomAria/api/createTypeApi";

const useCreateType = () => {
  const type = useRecoilValue(registerTypeState);

  const api = createTypeApi();

  const createType = async () => {
    const data = { type };
    try {
      const response = await api.postCreateType(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { createType };
};

export { useCreateType };
