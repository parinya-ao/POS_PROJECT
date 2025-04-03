import type { TYPE } from ".";

declare global {
  interface CREATE_ITEM {
    name: string;
    total: number;
    type_item: TYPE;
    price: number;
    image_url: string;
    expiration_date: string;
  }
}
