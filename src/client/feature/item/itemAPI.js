import axios from "../../utils/utils";
export const getItem = async () => {
  const response = await axios.get("/item");

  return response.data;
};

export const addItem = async (data) => {
  const response = await axios.post("/item", data);

  return response.data;
};
