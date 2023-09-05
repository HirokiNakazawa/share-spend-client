import { createTypeApi } from "@/features/Dashboard/LeftBottomAria/api/createTypeApi";
import { useReset } from "@/hooks/useReset";
import { useRecoilValue } from "recoil";
import { registerTypeState } from "@/recoil";

const useCreateType = () => {
  const type = useRecoilValue(registerTypeState);

  const api = createTypeApi();
  const reset = useReset();

  const createType = async () => {
    const data = { type };
    try {
      const response = await api.postCreateType(data);
      console.log(response);
      reset.resetTypeRegistrationParams();
    } catch (error) {
      console.log(error);
    }
  };

  return { createType };
};

export { useCreateType };
