import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import { CreateTypeFormData, PostTypeResponse } from "@/types";

const createTypeApi = () => {
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

  return { postCreateType };
};

export { createTypeApi };
