export type { TRANSACTION };

declare global {
  interface TRANSACTION {
    id: number;
    item_id: number;
    quantity: number;
    sold_at: string;
  }
}
