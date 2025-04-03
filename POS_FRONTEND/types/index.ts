import type { TYPE } from "./type";

export type { ITEM, TYPE };

declare global {
  interface ITEM {
    id: number;
    name: string;
    total: number;
    type: TYPE;
    price: number;
    expiration_date?: string | null; // 2025-03-31
    image_url: string;
    update_at: string; // 2025-03-31T10:36:42.102920
  }
}
