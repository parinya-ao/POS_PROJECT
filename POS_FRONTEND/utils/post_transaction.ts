import { useRuntimeConfig } from "#app";
import axios from "axios";

const post_transaction = async (transactions: CREATE_TRANSACTION[]) => {
  const config = useRuntimeConfig();
  await Promise.all(
    transactions.map(async (transaction) => {
      await axios.post(
        `${config.public.url}/transaction`,
        {
          item_id: transaction.item_id,
          quantity: transaction.quantity,
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

export default post_transaction;
