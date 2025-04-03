export type { order_items };

declare global {
  interface order_items {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
  }
}
