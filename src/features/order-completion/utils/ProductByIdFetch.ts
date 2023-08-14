import { API_BASE_URL, ENDPOINTS } from "@/services/api/shoppers.api";
import axios, { AxiosResponse } from "axios";

export const fetchProductById = async (
  id: string | undefined
): Promise<ProductByIdResponse> => {
  try {
    const res: AxiosResponse<ProductByIdResponse> = await axios({
      method: "GET",
      baseURL: API_BASE_URL,
      url: `${ENDPOINTS.products.products}/${id}`,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
