import axios from "axios";
import { API_BASE_URL } from "../../../config/config";

type AuthFormData = {
  name: string;
  password: string;
};

type PostAuthResponse = {
  id: number;
  name: string;
};

type TypeFormData = {
  type: string;
};

type PostTypeResponse = {
  id: number;
  type: string;
};

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

  const postLogin = async (data: AuthFormData): Promise<PostAuthResponse> => {
    try {
      const url = `${API_BASE_URL}/login`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const postCreateType = async (
    data: TypeFormData
  ): Promise<PostTypeResponse> => {
    try {
      const url = `${API_BASE_URL}/types/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postRegister, postLogin, postCreateType };
};

export { useApi };
