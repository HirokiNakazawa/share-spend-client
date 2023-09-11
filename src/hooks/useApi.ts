import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import {
  GetTypeListResponse,
  GetMonthlyCostByTypeResponse,
  GetUserCostListResponse,
  SelectDateState,
  GetMonthlyBillingAmountResponse,
} from "@/types";

const useApi = () => {
  const getTypeList = async (): Promise<GetTypeListResponse> => {
    try {
      const url = `${API_BASE_URL}/types`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getUserCostList = async (
    id: number,
    selectDate: SelectDateState
  ): Promise<GetUserCostListResponse[]> => {
    try {
      const url = `${API_BASE_URL}/costs/${id}?year=${selectDate.year}&month=${selectDate.month}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getMonthlyCostByType = async (
    selectDate: SelectDateState
  ): Promise<GetMonthlyCostByTypeResponse[]> => {
    try {
      const url = `${API_BASE_URL}/costs/type?year=${selectDate.year}&month=${selectDate.month}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getMonthlyBillingAmount = async (
    selectDate: SelectDateState
  ): Promise<GetMonthlyBillingAmountResponse> => {
    try {
      const url = `${API_BASE_URL}/billing-amount?year=${selectDate.year}&month=${selectDate.month}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getTypeList,
    getUserCostList,
    getMonthlyCostByType,
    getMonthlyBillingAmount,
  };
};

export { useApi };
