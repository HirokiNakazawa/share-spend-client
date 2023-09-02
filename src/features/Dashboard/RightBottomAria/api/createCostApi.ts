import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import { CreateCostFormData, PostCostResponse } from "@/types";

const createCostApi = () => {
  const postCreateCost = async (
    data: CreateCostFormData
  ): Promise<PostCostResponse> => {
    try {
      const url = `${API_BASE_URL}/types/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateCost };
};

export { createCostApi };
