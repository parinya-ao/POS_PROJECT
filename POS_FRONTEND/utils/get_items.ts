import { useRuntimeConfig } from "#app";
import axios from "axios";

const get_items = async (): Promise<ITEM[]> => {
  const config = useRuntimeConfig();
  const { data } = await axios.get<ITEM[]>(
    `${config.public.url}/items/?offset=0&limit=100`
  );
  return data;
};

export default get_items;
