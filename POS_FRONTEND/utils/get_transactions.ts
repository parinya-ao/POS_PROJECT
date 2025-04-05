import { useRuntimeConfig } from "#app";
import axios from "axios";

// const
// เอาไว้ดู result
const get_transactions = async (): Promise<TRANSACTION> => {
  const config = useRuntimeConfig();
  const { data } = await axios.get(`${config.public.url}/transaction`);
  return data;
};

export default get_transactions;
