import axios from "axios";
import { API_BASE_URL } from "../../../config/config";
import { AuthFormData, PostAuthResponse } from "../recoil/type";

const useApi = () => {
  const postRegister = async (
    data: AuthFormData
  ): Promise<PostAuthResponse> => {
    try {
      const url = `${API_BASE_URL}/register`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postRegister };
};

export { useApi };
