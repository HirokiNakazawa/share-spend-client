import axios from "axios";
import { API_BASE_URL } from "@/config/config";
import { UpdateCostFormData, PostCostResponse } from "@/types";

const updateCostApi = () => {
  const putUpdateCost = async (
    data: UpdateCostFormData,
    id: number
  ): Promise<PostCostResponse> => {
    try {
      const url = `${API_BASE_URL}/costs/update/${id}`;
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { putUpdateCost };
};

export { updateCostApi };
