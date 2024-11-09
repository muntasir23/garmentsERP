import axios from "../../utils/utils";
export const getSupplier= async () => {
  const response = await axios.get("/supplierList");

  return response.data;
};


export const addSupplier = async (data) => {
  const response = await axios.post("/supplierList", data);

  return response.data;
};