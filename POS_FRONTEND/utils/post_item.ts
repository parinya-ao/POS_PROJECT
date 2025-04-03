import { useRuntimeConfig } from "#app";
import axios from "axios";

const post_item = async (input_item: CREATE_ITEM) => {
  const config = useRuntimeConfig();
  const { name, total, type_item, price, expiration_date, image_url } =
    input_item;
  const { data } = await axios.post(
    `${config.public.url}/items/`,
    {
      name: name,
      total: total,
      type_item: type_item,
      price: price,
      image_url: image_url,
      expiration_date: expiration_date,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export default post_item;
