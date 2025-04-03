import { useRuntimeConfig } from "#app";
import axios from "axios";

const get_one_item = async (id: number): Promise<ITEM> => {
  const config = useRuntimeConfig();
  const { data } = await axios.get<ITEM>(`${config.public.url}/items/${id}/`);
  return data;
};

export default get_one_item;
