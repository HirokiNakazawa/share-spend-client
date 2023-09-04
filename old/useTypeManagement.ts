import { useRecoilValue } from "recoil";
import { registerTypeState } from "../recoil/typeState";
import { useApi } from "./useApi";

const useTypeManagement = () => {
  const type = useRecoilValue(registerTypeState);

  const api = useApi();

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

export { useTypeManagement };
