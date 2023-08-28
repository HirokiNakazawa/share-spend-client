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
  GetMonthlyCostByTypeResponse,
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

  const getMonthlyCostByType = async (): Promise<
    GetMonthlyCostByTypeResponse[]
  > => {
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;

      const url = `${API_BASE_URL}/costs/type?year=${year}&month=${month}`;
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

  return {
    postRegister,
    postLogin,
    getTypes,
    getMonthlyCostByType,
    postCreateType,
    postCreateCost,
  };
};

export { useApi };
