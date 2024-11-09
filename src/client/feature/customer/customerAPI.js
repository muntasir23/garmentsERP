import axios from "../../utils/utils";
export const getCustomer = async () => {
  const response = await axios.get("/customerList");

  return response.data;
};

export const addCustomer = async (data) => {
  const response = await axios.post("/customerList", data);

  return response.data;
};
