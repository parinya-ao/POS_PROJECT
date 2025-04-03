import { useRuntimeConfig } from "#app";
import axios from "axios";

const update_item_api = async (update_item: UPDATE_ITEM[]) => {
  const config = useRuntimeConfig();
  await Promise.all(
    update_item.map(async (item) => {
      await axios.put(
        `${config.public.url}/items/${item.id}`,
        {
          item_id: item.id,
          total: item.total,
          price: item.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    })
  );
};

export default update_item_api;
