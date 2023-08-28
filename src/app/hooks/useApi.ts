import axios from "axios";
import { API_BASE_URL } from "../../config/config";
import {
  AuthFormData,
  GetTypeResponse,
  PostAuthResponse,
  CreateTypeFormData,
  CreateCostFormData,
  PostCostResponse,
  PostTypeResponse,
} from "@/types";

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

  const getTypes = async (): Promise<GetTypeResponse[]> => {
    try {
      const url = `${API_BASE_URL}/types`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const postCreateType = async (
    data: CreateTypeFormData
  ): Promise<PostTypeResponse> => {
    try {
      const url = `${API_BASE_URL}/types/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const postCreateCost = async (
    data: CreateCostFormData
  ): Promise<PostCostResponse> => {
    try {
      const url = `${API_BASE_URL}/costs/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postRegister, postLogin, getTypes, postCreateType, postCreateCost };
};

export { useApi };
