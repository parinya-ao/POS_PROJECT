export type { UPDATE_ITEM };

declare global {
  interface UPDATE_ITEM {
    id: number;
    total: number;
    price: number;
  }
}
