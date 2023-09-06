import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import { AuthFormData, PostAuthResponse } from "@/types";

const authApi = () => {
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

  const postLogin = async (data: AuthFormData): Promise<PostAuthResponse> => {
    try {
      const url = `${API_BASE_URL}/login`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postRegister, postLogin };
};

export { authApi };
