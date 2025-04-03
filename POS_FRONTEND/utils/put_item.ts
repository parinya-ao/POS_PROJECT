import { useRuntimeConfig } from "#app";
import axios from "axios";

const update_item = async (update_item: UPDATE_ITEM) => {
  const config = useRuntimeConfig();
  const { id, total, price } = update_item;
  const { data } = await axios.put(
    `${config.public.url}/items/${id}`,
    {
      item_id: id,
      total: total,
      price: price,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export default update_item;
