import axios from "../../utils/utils";
export const getFactory = async () => {
  const response = await axios.get("/factory");

  return response.data;
};

export const addFactory = async (data) => {
  const response = await axios.post("/factory", data);

  return response.data;
};
